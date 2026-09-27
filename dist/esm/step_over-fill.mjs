export const name="step_over-fill";
export const id="dl_ba443f79d8ac6108c712";
export const url=new URL("../icons/step_over-fill.svg?v=a80519fd649a34d5be1616af20199802a546cba4443bc1818bf8690fb0047bbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
