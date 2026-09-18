export const name="brightness_4-fill";
export const id="dl_a73358ae045942fb89aa";
export const url=new URL("../icons/brightness_4-fill.svg?v=c14ff56942140387f45b57ce60d9eaf44e7d76c42c530d1318649a6c1524cf6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
