export const name="biohazard-thin";
export const id="dl_146122b90f8c43a898ae";
export const url=new URL("../icons/biohazard-thin.svg?v=c532709b7ec1be4b69fc14f19a83bf5cc869629d1a8dc978386301668977df8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
