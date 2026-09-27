export const name="frame_person";
export const id="dl_27142342d0cf9e09f27f";
export const url=new URL("../icons/frame_person.svg?v=418f5d329b1a0eb80d504bca4bd4b811ab31387c9fd8a0f07f6e35968ca5a99c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
