export const name="arrows-out-simple-thin";
export const id="dl_4a6e4392bb7b4bbb8af1";
export const url=new URL("../icons/arrows-out-simple-thin.svg?v=f702b49856775d6909eeded152b3aff32b9110a38407ffaecd392a09a3f78409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
