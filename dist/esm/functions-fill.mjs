export const name="functions-fill";
export const id="dl_f3eabd6f4dc8f49805fb";
export const url=new URL("../icons/functions-fill.svg?v=c46def63a74c2e1e0d084ca4d778a498ac22dea67127e94fce319a2b578a286e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
