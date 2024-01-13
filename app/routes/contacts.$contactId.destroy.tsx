import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { deleteContact } from "~/data";
import { MISSING_CONTACT_ID_PARAM } from "~/consts";

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, MISSING_CONTACT_ID_PARAM);

  await deleteContact(params.contactId);

  return redirect("/contacts");
};
