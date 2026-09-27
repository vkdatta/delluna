export const name="gear-fine-fill";
export const id="dl_38444a744fcc4c24bda9";
export const url=new URL("../icons/gear-fine-fill.svg?v=586b3da08deaab6729f7b9da4f7454a5f75453b92d1b7910fbe784ee47676b3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
