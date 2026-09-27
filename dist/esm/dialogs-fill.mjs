export const name="dialogs-fill";
export const id="dl_05a0f9b3f398acda24dd";
export const url=new URL("../icons/dialogs-fill.svg?v=c86b178b1db13068d8c2cae3dbcadde2ca4078d50887c246ff278e02bb90f915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
