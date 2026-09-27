export const name="mosque";
export const id="dl_b36c77d801814123907b";
export const url=new URL("../icons/mosque.svg?v=7185adb363b95079c446f75646d2d3a995003b452fd925636590d128876779fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
