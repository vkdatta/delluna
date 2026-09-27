export const name="lowercase-fill";
export const id="dl_2c5964c189ded3ad5cbe";
export const url=new URL("../icons/lowercase-fill.svg?v=f263a9046b363f59259f4336c3ffd85d0bd07cad0a27f6e2922e1e628a0c24c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
