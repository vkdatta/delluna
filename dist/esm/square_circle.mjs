export const name="square_circle";
export const id="dl_40996d4c3a56fec4beb9";
export const url=new URL("../icons/square_circle.svg?v=ebae26a07c9ee8577242c69dd93a7481ab84ceae9a12ab2c73f6e4fea314e807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
