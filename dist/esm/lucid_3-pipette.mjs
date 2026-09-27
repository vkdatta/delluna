export const name="lucid_3-pipette";
export const id="dl_16e9aa996e284e8a88c8";
export const url=new URL("../icons/lucid_3-pipette.svg?v=955c437e9434d6cf17c2e51e737666d72233d6c3f7a08b8b3c08eacaeae0146b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
