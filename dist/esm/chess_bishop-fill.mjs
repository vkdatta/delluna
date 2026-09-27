export const name="chess_bishop-fill";
export const id="dl_0b0cec29eaf69e90ba28";
export const url=new URL("../icons/chess_bishop-fill.svg?v=7036b043c82c39efb03c6810e8f61d12ac61d5c937d29f5f397fe705e72fe768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
