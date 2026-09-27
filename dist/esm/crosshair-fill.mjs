export const name="crosshair-fill";
export const id="dl_540fc7fa8e2941ae9a2b";
export const url=new URL("../icons/crosshair-fill.svg?v=8dfa01b65ecccc740800ab95db8001bad7bde97d645dfcd0bd10c2d4be331047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
