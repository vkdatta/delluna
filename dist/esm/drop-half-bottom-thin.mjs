export const name="drop-half-bottom-thin";
export const id="dl_3aa6077e0a2f4850b9c6";
export const url=new URL("../icons/drop-half-bottom-thin.svg?v=f379ff55e5d094976699e3fdfce462b8c35c13e24832405facbb17121b52fc62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
