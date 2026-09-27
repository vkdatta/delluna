export const name="smiley-blank-bold";
export const id="dl_e51f041a592a69a48a4a";
export const url=new URL("../icons/smiley-blank-bold.svg?v=39db5da3f4a4763b1f4f18af9143a4ee0a066eefb763a47888ebe2aafe1a8ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
