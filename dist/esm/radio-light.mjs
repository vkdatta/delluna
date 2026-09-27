export const name="radio-light";
export const id="dl_bb4b84d711ae4c489952";
export const url=new URL("../icons/radio-light.svg?v=8a3f7849bbbdf118ea6ae928480af0423e63abdba70e7490a5ff8e188f51dcc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
