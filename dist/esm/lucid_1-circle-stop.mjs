export const name="lucid_1-circle-stop";
export const id="dl_251b314cb9574b8fbb04";
export const url=new URL("../icons/lucid_1-circle-stop.svg?v=53aee2175f9adeb5cccd0dcd72e9bf0e9def89fab8da72834434425447fbc2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
