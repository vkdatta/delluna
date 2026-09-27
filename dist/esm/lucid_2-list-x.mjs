export const name="lucid_2-list-x";
export const id="dl_c91b381fb6f54f278e90";
export const url=new URL("../icons/lucid_2-list-x.svg?v=8d29a5d70f0fe59f8026da0e3f082f8fff75810d2cb30b0ec450cde92cbf7747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
