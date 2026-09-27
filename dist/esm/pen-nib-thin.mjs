export const name="pen-nib-thin";
export const id="dl_1c580d90840644eb9148";
export const url=new URL("../icons/pen-nib-thin.svg?v=8b9c83a6dcedd297c6bce10c8e68df41687ddb0022f2e1dfdf5d472a860d7813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
