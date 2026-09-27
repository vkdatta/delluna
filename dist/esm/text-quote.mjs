export const name="text-quote";
export const id="dl_bb4fe413abd948b092bf";
export const url=new URL("../icons/text-quote.svg?v=fabe302c88113cd4f4baa832d0de895dd35eb1bb346ef4e3224e3984108675b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
