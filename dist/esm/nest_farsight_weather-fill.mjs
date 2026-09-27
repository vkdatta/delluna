export const name="nest_farsight_weather-fill";
export const id="dl_473d25bca289b397da05";
export const url=new URL("../icons/nest_farsight_weather-fill.svg?v=f2ce01dc6411d97bf6b81adbac6ab2800433bded31db7378d6786d710f063379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
