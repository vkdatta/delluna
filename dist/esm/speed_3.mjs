export const name="speed_3";
export const id="dl_25ab2f9f0be948e7778d";
export const url=new URL("../icons/speed_3.svg?v=7546da765c80082fd14fb5b6d6c275d4a446c882c96b12162da27f95f1c23c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
