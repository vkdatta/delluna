export const name="scan-smiley-thin";
export const id="dl_727017b71ed1a53728a4";
export const url=new URL("../icons/scan-smiley-thin.svg?v=637801ca51157d813ca26e496b44a303606a481cfff590b6bf6f07a88145d8ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
