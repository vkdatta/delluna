export const name="vaccines";
export const id="dl_1f61fe414248456789a9";
export const url=new URL("../icons/vaccines.svg?v=a3f039c281e5beda3de3c987b6b975f6c265b20d5131264501e37e6b33593381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
