export const name="tooltip_2";
export const id="dl_527376e7f69a407abc2a";
export const url=new URL("../icons/T/tooltip_2.svg?v=d82f2317e78989dd5fe674b359f29aead7ee30e701b86592d690a02cfb0d7c52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
