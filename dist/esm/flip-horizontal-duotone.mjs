export const name="flip-horizontal-duotone";
export const id="dl_f0f188216abf4c9d99d6";
export const url=new URL("../icons/flip-horizontal-duotone.svg?v=1c8c1aaeed5f5116f7ad312535694bdab6ec444492c7a59a33889d2a905acd40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
