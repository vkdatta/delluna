export const name="goodreads-logo-light";
export const id="dl_7e42aa704abd49fab1ee";
export const url=new URL("../../icons/G/goodreads-logo-light.svg?v=bc09514c4f9d3f9b24bc8bcdf43a09b11e63499665751929a758d64e71b88fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
