export const name="line-segment-duotone";
export const id="dl_4b4adf30f6ff48d1b8f0";
export const url=new URL("../icons/line-segment-duotone.svg?v=0cde9b79f30ef1cf360b9239ca6aef491ffc9505c70db3b75767cab62cf5ca95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
