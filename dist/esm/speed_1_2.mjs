export const name="speed_1_2";
export const id="dl_e2383e623ab476793743";
export const url=new URL("../icons/speed_1_2.svg?v=b85c767bd2b0b3a0a4de3f4f95f6da463aa71076056b2c66ff3ea292a39aff7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
