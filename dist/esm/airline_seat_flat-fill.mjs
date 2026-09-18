export const name="airline_seat_flat-fill";
export const id="dl_6c9b46f5e3134d81acff";
export const url=new URL("../icons/airline_seat_flat-fill.svg?v=49695680ea6e8db5ec2a6ca65556929874b8a8d1c040f401bb535f694499e263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
