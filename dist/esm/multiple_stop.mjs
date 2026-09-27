export const name="multiple_stop";
export const id="dl_85397c864487ec18d999";
export const url=new URL("../icons/multiple_stop.svg?v=2862da35ed111c50ad6f991e483147b9079280edb2d6807efcd947c6a9845e58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
