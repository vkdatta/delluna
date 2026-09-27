export const name="asterisk-simple-bold";
export const id="dl_562acf56c4344ecbbffa";
export const url=new URL("../icons/asterisk-simple-bold.svg?v=168b8317fec04fb6d9cc75f35d4cbe9b1c90714d13804d1df06aef1bfe41e509",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
