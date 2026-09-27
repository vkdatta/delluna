export const name="filter_off";
export const id="dl_33716c9bb7b8f4f2f0da";
export const url=new URL("../icons/filter_off.svg?v=ba1047809b96ba9eebda4e742f5062d8f4856b3305dcc53484b76f01725f94a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
