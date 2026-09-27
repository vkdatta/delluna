export const name="interactive_space";
export const id="dl_014d584b3a6929a8ee6d";
export const url=new URL("../icons/interactive_space.svg?v=c1c620eb2793bd90e3c08552cc1a4425bb301062cc858f7739ee0c4782e1391a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
