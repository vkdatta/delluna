export const name="circles-three-fill";
export const id="dl_9d4e36898b1142ebad77";
export const url=new URL("../icons/circles-three-fill.svg?v=a0f7f2595de88d93a995ae8b10113ca2623a5186883a18c53f302f4a885a7d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
