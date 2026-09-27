export const name="lucid_1-circle-off";
export const id="dl_1908406c18dd488686ec";
export const url=new URL("../icons/lucid_1-circle-off.svg?v=7987d5c6be14f29ceb2fe3606aeade7afc3690598089874550bfc5a60cafb991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
