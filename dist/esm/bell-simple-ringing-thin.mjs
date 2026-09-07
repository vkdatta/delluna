export const name="bell-simple-ringing-thin";
export const id="dl_67395d32a2c3445ea5e5";
export const url=new URL("../icons/bell-simple-ringing-thin.svg?v=9eb051fdcae6345104e439ac98d663a3e607b717a881292ea50124ce8bcf69fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
