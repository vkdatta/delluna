export const name="contactless-fill";
export const id="dl_75122ea0e6a46d78677a";
export const url=new URL("../icons/contactless-fill.svg?v=950ce527c7e17abaea42d9a6304915f99eb5240d8b1fb4187a733e3b5af0b91d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
