export const name="pencil-ruler-thin";
export const id="dl_5f66c903bd064a0ebd9b";
export const url=new URL("../icons/pencil-ruler-thin.svg?v=caa367c975e480e0a27d6c08b9a71003bd3b92e1f87caf7c95cfc8027602df8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
