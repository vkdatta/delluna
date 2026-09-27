export const name="lucid_2-dog";
export const id="dl_86933778e5c2462ebfe4";
export const url=new URL("../icons/lucid_2-dog.svg?v=b96bd4c5e50c1c5215a9b38a685c0038ede835c765e01e07538c28d9b3cf14d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
