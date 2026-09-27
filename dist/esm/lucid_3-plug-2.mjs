export const name="lucid_3-plug-2";
export const id="dl_4fad767c14e14fa3bb40";
export const url=new URL("../icons/lucid_3-plug-2.svg?v=3e4fb131bf8138f2f09204b95443d0cf34ec7db9d83fb4ffbd32b101275c3c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
