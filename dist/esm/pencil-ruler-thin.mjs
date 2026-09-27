export const name="pencil-ruler-thin";
export const id="dl_5f66c903bd064a0ebd9b";
export const url=new URL("../icons/pencil-ruler-thin.svg?v=23030099022efcd76363afe148f4ed10a251923f92f6007b019c2c3dbec68538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
