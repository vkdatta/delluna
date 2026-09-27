export const name="bell-z-fill";
export const id="dl_d5dc5faf17444d5881ad";
export const url=new URL("../icons/bell-z-fill.svg?v=31696762e03cf7e7979213230a343e384caeceb038ea16906a20e925c0b36cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
