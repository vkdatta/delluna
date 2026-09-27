export const name="hand-tap-bold";
export const id="dl_363a103e1cba469abbf9";
export const url=new URL("../icons/hand-tap-bold.svg?v=e01e988ca898329dda9afae6054f338b6086bc8a445a132082ce7eb442439ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
