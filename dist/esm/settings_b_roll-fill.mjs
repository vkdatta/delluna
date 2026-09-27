export const name="settings_b_roll-fill";
export const id="dl_453b02de13a20a25cf81";
export const url=new URL("../icons/settings_b_roll-fill.svg?v=3329e66a1a4d0443698f8c31118b3a928e6b6eb0603ab3da0fa41aa6d3f90a4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
