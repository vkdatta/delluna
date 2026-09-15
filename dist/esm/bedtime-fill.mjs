export const name="bedtime-fill";
export const id="dl_a2ee2258f8354c89acea";
export const url=new URL("../icons/B/bedtime-fill.svg?v=285da5aa37fd15593f0b8f6e1c1864626abde43023797444c70c20d4dd15fe31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
