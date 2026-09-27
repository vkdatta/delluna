export const name="scroll-thin";
export const id="dl_724fd08770625b74bdb3";
export const url=new URL("../icons/scroll-thin.svg?v=73b3f8867dfa3a14c40e2ffaecfcb9e5c4faaa094849a4a8b828fa1ce6d0f1a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
