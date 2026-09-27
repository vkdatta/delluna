export const name="biohazard-fill";
export const id="dl_64b339b3f2fd4f6f924b";
export const url=new URL("../icons/biohazard-fill.svg?v=fcd26c14b3d4281ed9bed5a19d0b6f00f29de45919460a86903d024812f5eaf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
