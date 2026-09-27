export const name="flag-pennant-fill";
export const id="dl_d3a1597b9ee0466fbb34";
export const url=new URL("../icons/flag-pennant-fill.svg?v=dc6b1c89b8ea4e6700cbcbc6cdaadeff9e7f0017f19a70b8657d9ee333149baf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
