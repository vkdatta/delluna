export const name="lucid_2-footprints";
export const id="dl_77f6d1261e9048fa9284";
export const url=new URL("../icons/lucid_2-footprints.svg?v=bdc091d21549a8cb2df335aae4a54f81e099c49ab4ecbf53507e2cbed5e1c95b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
