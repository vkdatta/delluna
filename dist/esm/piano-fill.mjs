export const name="piano-fill";
export const id="dl_fc5b84157e4721397cd4";
export const url=new URL("../icons/piano-fill.svg?v=91d6ee0b2418e155ae6297fdbde96101a2e2bdf2bdfd93ede2e1a59eccd5fb91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
