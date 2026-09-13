export const name="2d";
export const id="dl_05297218661a465783bd";
export const url=new URL("../icons/2/2d.svg?v=d79d0489e66c544be508244c8508c8d20b22283c1a8228fbf163fb00f0ab110d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
