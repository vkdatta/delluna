export const name="brackets-round";
export const id="dl_2c2e2dd0698f4be6b9f4";
export const url=new URL("../icons/brackets-round.svg?v=66dc952a0823a3f63bdf0eedc8af9079f11cecbdf50914ba8d8047894b3f7608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
