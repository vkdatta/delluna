export const name="speed_0_5";
export const id="dl_e5e69737807348b7bf96";
export const url=new URL("../icons/S/speed_0_5.svg?v=4d31cacfa97d3862cbe0a9c16d72f8355d58b633a7a37dd9ec477863e7223bd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
