export const name="dice-six-light";
export const id="dl_84672846a9d94226a42f";
export const url=new URL("../icons/dice-six-light.svg?v=7048063278a5e17f9d548a21304c44b5a6bb27724d8335680873e44e16c976ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
