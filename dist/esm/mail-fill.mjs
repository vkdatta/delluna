export const name="mail-fill";
export const id="dl_153276ee08a0dd0223b6";
export const url=new URL("../icons/mail-fill.svg?v=cf21a6f897866794bda574008c4aeec202215a2f2c933e81f66b64e835b7542d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
