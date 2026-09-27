export const name="repeat-bold";
export const id="dl_931d6f3a94bc4a029dca";
export const url=new URL("../icons/repeat-bold.svg?v=73ccea2c0cec3ef8f0f9ae2bcd68e4f7ac2e63237a8dd0d162b1ca820036d8b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
