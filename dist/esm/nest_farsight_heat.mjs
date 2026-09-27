export const name="nest_farsight_heat";
export const id="dl_18919e5ef36bf4e15c6f";
export const url=new URL("../icons/nest_farsight_heat.svg?v=0863e6f54cd62274297512f469432cf50bf547b2483f31457cb9526c76310296",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
