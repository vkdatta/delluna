export const name="hourglass_arrow_down-fill";
export const id="dl_f1e189313b524520925b";
export const url=new URL("../icons/H/hourglass_arrow_down-fill.svg?v=16cecfd78d347b447994189d0f9107e5a9099013f9962aca9ee1dc1733a3a959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
