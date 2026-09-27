export const name="stop-circle";
export const id="dl_92a0edbc411565830293";
export const url=new URL("../icons/stop-circle.svg?v=9373804d8299204441a2095e60cf7f10189a2210399f116e7abd5ae19d91b5d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
