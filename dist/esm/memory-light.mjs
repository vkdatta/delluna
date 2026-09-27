export const name="memory-light";
export const id="dl_10936428b5104dff84bc";
export const url=new URL("../icons/memory-light.svg?v=60b1f1ea1ded78c9ff1da1e723e398099befa430622370c08d338beae5b21c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
