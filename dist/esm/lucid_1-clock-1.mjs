export const name="lucid_1-clock-1";
export const id="dl_25228b02833f44f3bf8d";
export const url=new URL("../icons/lucid_1-clock-1.svg?v=b6b3d728ad75af8dafb9d88f71e559c3ddcd03317ca2f2d437cfb34ffb54866f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
