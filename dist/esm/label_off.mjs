export const name="label_off";
export const id="dl_9b870af04eff606bd6f2";
export const url=new URL("../icons/label_off.svg?v=f0b48109d4fe228c191661c5605534b54c7564c40ccb824b553b2a898a0a5ec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
