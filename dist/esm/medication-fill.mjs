export const name="medication-fill";
export const id="dl_9d9b48af075930a61ad5";
export const url=new URL("../icons/medication-fill.svg?v=939417a5e8fa25b97ebcfc549b8fed5f347dfba767e6115642fc8eb4d9b3aea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
