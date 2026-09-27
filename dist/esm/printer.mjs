export const name="printer";
export const id="dl_5511a9dead514b528e2d";
export const url=new URL("../icons/printer.svg?v=0aaabb5bc0d3b160ebe61bf15e71ba05b551c1c7d75291ae8dd5bfee2a761ab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
