export const name="light_group-fill";
export const id="dl_e3aa5bd9859a46ad8f91";
export const url=new URL("../icons/light_group-fill.svg?v=6173e4665b3dadb397ef719c0036a421790e354bc5a8ecfe3b8b782fd45977c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
