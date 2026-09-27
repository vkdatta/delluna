export const name="flower-tulip-thin";
export const id="dl_f5df8b11cf1044cdb648";
export const url=new URL("../icons/flower-tulip-thin.svg?v=33d08a96873e9911f83d05ba10500d296a3e4f49e291ecc49fbb85863c53f74f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
