export const name="ink_pen-fill";
export const id="dl_9aeb60d5f8f8dcdf3767";
export const url=new URL("../icons/ink_pen-fill.svg?v=a05f2c6b397c6a6eafa2798fd89c5d0386d5cb16466147fbe17766d445989113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
