export const name="keep_public-fill";
export const id="dl_ace6dd9d8c597a5f6336";
export const url=new URL("../icons/keep_public-fill.svg?v=a236172f2883bc1e6471bfc755c38a931cc1cd311e25ba33da19ec6a3273b3a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
