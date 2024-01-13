import {
  Form,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export default function Contacts() {
  return (
    <>
      <div id="sidebar">
        <h1>Remix Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              aria-label="Search contacts"
              id="q"
              name="q"
              placeholder="Search"
              type="search"
            />
            <div aria-hidden hidden={true} id="search-spinner" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </>
  );
}
