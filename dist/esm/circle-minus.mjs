export const name="circle-minus";
export const id="dl_9a33dc6c01bb1965c14f";
export const url=new URL("../icons/circle-minus.svg?v=16880fc87668e77f03df20f104e34666209d07d7bd5c69667f9745493c447d3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
