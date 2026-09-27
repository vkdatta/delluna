export const name="bridge-thin";
export const id="dl_a85c4464f3b34b30b506";
export const url=new URL("../icons/bridge-thin.svg?v=29a5754b6696c7721beb1319a653f9b98189f2ba1687528cf3b3b3a2de2ebc5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
