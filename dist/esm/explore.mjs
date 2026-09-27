export const name="explore";
export const id="dl_ca0262084d856bb91903";
export const url=new URL("../icons/explore.svg?v=383b4edb976842abf0251e747d6591639b06f33e718584734f116c433ac945b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
