export const name="hdr_auto_select-fill";
export const id="dl_cc70dde4a37e757d325f";
export const url=new URL("../icons/hdr_auto_select-fill.svg?v=db8386c3bfc8e382458163e8a6768ff909a510ea81f189668a1f6888b57f55b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
