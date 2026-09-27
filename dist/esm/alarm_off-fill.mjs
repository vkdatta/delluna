export const name="alarm_off-fill";
export const id="dl_0f6c5f7b07a8ffc74303";
export const url=new URL("../icons/alarm_off-fill.svg?v=050c20fb331fc13b915ab1734739353c1b42f347c33631161d21679e70a71bb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
