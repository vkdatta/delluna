export const name="wb_sunny";
export const id="dl_bfe60962d0c74d7eaa7d";
export const url=new URL("../icons/wb_sunny.svg?v=df1267e9f3702029d7b1d777af6354828a067fabec39c3239396e69cc63e47fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
