export const name="airplane-takeoff-duotone";
export const id="dl_a8134cbdbd2948498f8e";
export const url=new URL("../icons/airplane-takeoff-duotone.svg?v=1dc4cb9b14171f4789a825635cf58bc3576bd32f3db20d26be236b247b855783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
