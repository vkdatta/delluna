export const name="delete_forever";
export const id="dl_fce464b58bf86e1aff61";
export const url=new URL("../icons/delete_forever.svg?v=cd22f97d7ee1a860d3f8ab4bdcc27c93705a59a112b48dfd1ce8a23cb3af9678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
