export const name="bicycle-bold";
export const id="dl_f92b8e1137f84a3a9faf";
export const url=new URL("../icons/bicycle-bold.svg?v=f5ab3db52f526d6e266c23e79ea72b4f4abeec3b9c67168fb9cb947e63e48356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
