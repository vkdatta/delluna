export const name="swipe_right";
export const id="dl_1fc02f7b96615142fd8f";
export const url=new URL("../icons/swipe_right.svg?v=d6846a6da85d21b293b2775f21251d4b69dac2cb555a450cffbb2e8195edac05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
