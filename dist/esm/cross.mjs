export const name="cross";
export const id="dl_ad560705d24148038be3";
export const url=new URL("../icons/cross.svg?v=3f4afb4c5f2b2218bef73b083faa71fdf45a668b1d97e1027d86ad109a0f1ae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
