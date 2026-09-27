export const name="cottage-fill";
export const id="dl_c4d4d16bc52a862f91e7";
export const url=new URL("../icons/cottage-fill.svg?v=c640bdb650dce62ae497faeca7420843b32f77448699d7eacf9473498c48b738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
