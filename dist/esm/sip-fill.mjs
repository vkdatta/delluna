export const name="sip-fill";
export const id="dl_0f0bd517401eb1c09559";
export const url=new URL("../icons/sip-fill.svg?v=96079fa0e6c5006eae84f8e91f7f2b514a90b706989aab3b9c80a12cfb8fe0a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
