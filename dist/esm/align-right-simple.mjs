export const name="align-right-simple";
export const id="dl_1a673e48696c4cd09b40";
export const url=new URL("../icons/align-right-simple.svg?v=360f10e5b97219fa6395317242569b357e1e3539941e0753f7a617e8ac0bd889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
