export const name="caret-circle-right-fill";
export const id="dl_69c08ee556584433aa7f";
export const url=new URL("../icons/caret-circle-right-fill.svg?v=261dd3f1c1f8de194a40d20fd8347f5a0cb60a4b58077682dfb4527dfb692886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
