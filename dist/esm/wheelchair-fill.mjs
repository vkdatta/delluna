export const name="wheelchair-fill";
export const id="dl_de30f24891c0e87c95c5";
export const url=new URL("../icons/wheelchair-fill.svg?v=4175540ffc2add61349b4d23745d601fec993003095bb39028d21a60a0163f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
