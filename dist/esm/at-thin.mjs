export const name="at-thin";
export const id="dl_1297b1436a2642c1aa11";
export const url=new URL("../icons/at-thin.svg?v=0ee1c75625607d065b628af5ed4392b813ee0abb9cddef08d7136b19e035b1e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
