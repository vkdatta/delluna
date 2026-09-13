export const name="2d_2-fill";
export const id="dl_c267568823a94629aa6f";
export const url=new URL("../icons/2/2d_2-fill.svg?v=41103a012083a57ff41e6a4daac1c4b23c4256ef3704046cc414a270491d3a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
