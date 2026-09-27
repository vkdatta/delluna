export const name="float_portrait_2-fill";
export const id="dl_322ebca3a801254923ff";
export const url=new URL("../icons/float_portrait_2-fill.svg?v=3e7b6d1cab745b318ec0dc629e9775823ecf6dea3dffc0c1e78c955440d91937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
