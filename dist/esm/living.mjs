export const name="living";
export const id="dl_26635ef0c75bb2c600c5";
export const url=new URL("../icons/living.svg?v=b5013b53335f728b520ca22e8d7bcfd2b535123836ac524b903795de1b672810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
