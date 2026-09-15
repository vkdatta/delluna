export const name="do_not_disturb_on_total_silence";
export const id="dl_e17a2319c0894383b726";
export const url=new URL("../icons/D/do_not_disturb_on_total_silence.svg?v=0c243f63b9495433a794282c35d9bb174436d1f2412816b19d823ac188666f6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
