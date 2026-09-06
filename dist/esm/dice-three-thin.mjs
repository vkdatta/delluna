export const name="dice-three-thin";
export const id="dl_eaf1671958394a9c963c";
export const url=new URL("../icons/dice-three-thin.svg?v=bf1942b3ffb79e44b655af1f14020ca657f697fbb8373e80e48f37726f6f35c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
