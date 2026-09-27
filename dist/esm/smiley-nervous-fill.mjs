export const name="smiley-nervous-fill";
export const id="dl_d630024f4fa5b2439aec";
export const url=new URL("../icons/smiley-nervous-fill.svg?v=d19498cd73f64979e26bb923c416d7c1f089a65986a4185a2af0b5d56ddbe0e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
