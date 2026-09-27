export const name="medication-fill";
export const id="dl_647b07652550284d9ab8";
export const url=new URL("../icons/medication-fill.svg?v=65496fc6596a72d77a4dd8c074a37f862a9a5acb3abea1f8ed93ce3eac7666e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
