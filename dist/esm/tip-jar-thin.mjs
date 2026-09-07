export const name="tip-jar-thin";
export const id="dl_1a3a5ee7934d46568d0e";
export const url=new URL("../icons/T/tip-jar-thin.svg?v=4693a5548e960615e2f2df5a7c0ce4ac0394df8327a062465985c7db0c67a2fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
