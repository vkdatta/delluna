export const name="lucid_3-mic";
export const id="dl_aebfb823f9234c09bf8e";
export const url=new URL("../icons/lucid_3-mic.svg?v=3f0634b5850da4a0adf5809620c58c55e72e0977df2b65574fa4beb6f40621cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
