export const name="labs-fill";
export const id="dl_099fdbf4bd4ad1f99b8f";
export const url=new URL("../icons/labs-fill.svg?v=fb748738a0ec163a4effa33e0aa44691caace87d2bfbfa0ba9a72d07d1ce16e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
