export const name="lucid_2-gauge";
export const id="dl_5be1daff9e784a7d8e8f";
export const url=new URL("../icons/lucid_2-gauge.svg?v=4d8d6442c7535a984a5faf8b88583cdc3e38b881ba6b6fc15f8e059d6f66b9dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
