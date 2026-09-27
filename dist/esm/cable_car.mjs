export const name="cable_car";
export const id="dl_3f3d99b42adebc7d3bcc";
export const url=new URL("../icons/cable_car.svg?v=e140b0674eb13dc858ba704d0a142c3325e423db840f8ec45d77c8ea6fae1c6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
