export const name="cigarette-duotone";
export const id="dl_bb5aaed69148436dbb84";
export const url=new URL("../icons/cigarette-duotone.svg?v=33c5115d9bc5483edac0e4684f37a3f876a2a908a424ce398f84d1e2c8c922b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
