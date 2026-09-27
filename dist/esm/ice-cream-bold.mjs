export const name="ice-cream-bold";
export const id="dl_a5db2543bf494a3da6cc";
export const url=new URL("../icons/ice-cream-bold.svg?v=14fb6a51a18630ec71ac5b4adb459e232038df63189a5ce0ed04926f140a9cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
