export const name="conveyor_belt";
export const id="dl_a39a4abb4f218bea7a8b";
export const url=new URL("../icons/conveyor_belt.svg?v=a201544978c0d376890edb4bb78057be4c1fa13ecf1a2e8439e70fe28f4b1f71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
