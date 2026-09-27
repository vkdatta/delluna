export const name="user-circle-plus-fill";
export const id="dl_997206bca3a4c2b4b16c";
export const url=new URL("../icons/user-circle-plus-fill.svg?v=994acfb755cf0da7fda474d64b52d1773ee948bc94af69a903398b7dd4fd8254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
