export const name="pepper-duotone";
export const id="dl_07d3dc51560547d69948";
export const url=new URL("../icons/pepper-duotone.svg?v=367ecf0a81916d4f68ca59e58e10d75561952fc62ca208c1c97f4a778abce92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
