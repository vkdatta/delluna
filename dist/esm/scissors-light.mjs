export const name="scissors-light";
export const id="dl_8b90291790e67a7afdc6";
export const url=new URL("../icons/scissors-light.svg?v=b191507bd723d6b483a0c1dbefab2a6292d629cdcab8f629798397129fedb66e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
