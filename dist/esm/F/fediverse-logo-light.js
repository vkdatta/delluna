export const name="fediverse-logo-light";
export const id="dl_5b125990d7e04385a62b";
export const url=new URL("../../icons/F/fediverse-logo-light.svg?v=4e262433e2f7db371f12ed285a46a8bc0ff5192737d263a31526961405e1c190",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
