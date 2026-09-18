export const name="shadow_add-fill";
export const id="dl_2147b6e318f3495b867b";
export const url=new URL("../icons/shadow_add-fill.svg?v=cacfa949d8d87e5c1bb7f070923f7409dd3db726db71c56f9ff59e33b10c7c19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
