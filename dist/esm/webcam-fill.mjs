export const name="webcam-fill";
export const id="dl_fa12554ea328429eb2a3";
export const url=new URL("../icons/W/webcam-fill.svg?v=1185b2486513c6769e1ce214e20d8375edcafc5ba5de24041b0824b3e05312d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
