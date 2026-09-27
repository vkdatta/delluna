export const name="sentiment_very_satisfied-fill";
export const id="dl_931556dc3945dca8990d";
export const url=new URL("../icons/sentiment_very_satisfied-fill.svg?v=1b9150fa0540a8575d07175f6d0e6ec8d77e1b92eebb8c2d7958570eddd71dfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
