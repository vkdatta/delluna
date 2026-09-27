export const name="view_sidebar";
export const id="dl_0b71850bbc38cb140cec";
export const url=new URL("../icons/view_sidebar.svg?v=c1c18389788e58dd95304d9ff3aae390d726dc60f18183e28435790e9049d4d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
