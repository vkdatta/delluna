export const name="number-square-four-thin";
export const id="dl_ebefd27194b047c19418";
export const url=new URL("../icons/number-square-four-thin.svg?v=5f3a3f90383ba415dcdd26c55cec4f14931e1a0db7e8767b4a83a0f55c88c415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
