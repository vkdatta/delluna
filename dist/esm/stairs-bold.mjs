export const name="stairs-bold";
export const id="dl_f2a3a4c33c1dd5914429";
export const url=new URL("../icons/stairs-bold.svg?v=3e57e92e8bdb2514a83d1b89445bdc12535141d0a9edf2ed8acfcad6c44fde61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
