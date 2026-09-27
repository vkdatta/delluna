export const name="hourglass-simple-low-fill";
export const id="dl_26aaad2add7747aca183";
export const url=new URL("../icons/hourglass-simple-low-fill.svg?v=d7df61897f505aaa3037e0e7e51d7f31758cf3295aa91fea7c1ef6ffa0ee63ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
