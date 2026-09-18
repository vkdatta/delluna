export const name="swords";
export const id="dl_c23145dae737400ab034";
export const url=new URL("../icons/S/swords.svg?v=7ccba4bf2233b8154467573d801b7b0422e2f4eb62a50b71cbf112e914532aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
