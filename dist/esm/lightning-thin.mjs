export const name="lightning-thin";
export const id="dl_f30ee5122fb64707a2cf";
export const url=new URL("../icons/lightning-thin.svg?v=a9671aa0e407d3f469a85156ed29886dfb521b4fedce5a8f94cd4ecd17184d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
