export const name="needle-light";
export const id="dl_b3f980bc8dd44790a9ca";
export const url=new URL("../icons/needle-light.svg?v=5cbc35f55793954dae523ff2bde250125a4d20cd2d2352274a2867f0f25b62bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
