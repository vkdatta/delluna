export const name="15mp-fill";
export const id="dl_e94205eddef8c7b63d46";
export const url=new URL("../icons/15mp-fill.svg?v=24637ff6436a0a82d33105ba8e7ee9df94879cd0bf1b27d867dfc1abacadb3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
