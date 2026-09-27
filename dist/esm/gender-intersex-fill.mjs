export const name="gender-intersex-fill";
export const id="dl_ca64f4e7646e4326aadb";
export const url=new URL("../icons/gender-intersex-fill.svg?v=3ca181fd9348d791056a0dc13d1f3fb972cd0d19207fbf67698c8b257574483a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
