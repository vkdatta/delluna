export const name="upload_2-fill";
export const id="dl_7afe5aa6e765751525ff";
export const url=new URL("../icons/upload_2-fill.svg?v=f8b365abd585144fe14321687ae688836bae6d18154054d7d4bbc5e387e23521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
