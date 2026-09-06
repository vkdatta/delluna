export const name="lectern-bold";
export const id="dl_ed07a97a83324b72b258";
export const url=new URL("../icons/lectern-bold.svg?v=02b8c139c422ce60064ecf430745c573ad885f5e6b271ea6f4bb1016b8b1290f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
