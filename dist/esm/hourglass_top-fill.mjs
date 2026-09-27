export const name="hourglass_top-fill";
export const id="dl_67d2abacce433fc43c8f";
export const url=new URL("../icons/hourglass_top-fill.svg?v=21e48083c40f6b9a58cbcb3d7f4d5b31004fcaea21abd3ce286961a075c09176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
