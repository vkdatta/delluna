export const name="lucid_3-signal";
export const id="dl_cc91d2f3f6ca4e4c8f51";
export const url=new URL("../icons/lucid_3-signal.svg?v=97cbbe904875ed317f1b34b967be9d33aaf6cec522271343b73d984949764a0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
