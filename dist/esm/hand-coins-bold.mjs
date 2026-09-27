export const name="hand-coins-bold";
export const id="dl_a3578ce007db4d98ba0a";
export const url=new URL("../icons/hand-coins-bold.svg?v=c44685b79dedc00fee2806f1c62a0d5f65e6843112440a23948c835b21f47b8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
