export const name="text-a-underline-light";
export const id="dl_55af89a108ac45fab83a";
export const url=new URL("../icons/T/text-a-underline-light.svg?v=c6208e0f2ced9f0b8549abe0987d994301ce397dbc630937f40376e7fa040c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
