export const name="messenger-logo";
export const id="dl_dfad81a8e99d45b19fad";
export const url=new URL("../../icons/M/messenger-logo.svg?v=2cd1cd284facd6cb64d4eb2c7c8199bad689a9fb878702439759939306772008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
