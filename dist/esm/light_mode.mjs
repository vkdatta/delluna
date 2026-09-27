export const name="light_mode";
export const id="dl_4b3a504f7d24a7c66ee7";
export const url=new URL("../icons/light_mode.svg?v=a396e4c6ab869c60a0a14e53e52829ec0346f084fc40bf1f677d3361c0d5a73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
