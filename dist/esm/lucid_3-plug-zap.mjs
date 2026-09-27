export const name="lucid_3-plug-zap";
export const id="dl_a8531f1aa1ce41f8a44b";
export const url=new URL("../icons/lucid_3-plug-zap.svg?v=aa60457244245514a525f5826445f2bed87891fa499312a3b4a699245286837f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
