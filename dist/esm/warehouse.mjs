export const name="warehouse";
export const id="dl_d9e6b869556e6108728a";
export const url=new URL("../icons/warehouse.svg?v=badd282061f68ab49add4f12bfc22fbc360b59628bfb551a6b357dd4bb8b326c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
