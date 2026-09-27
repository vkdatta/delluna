export const name="lucid_2-mail-warning";
export const id="dl_a32e4f7580c34f989273";
export const url=new URL("../icons/lucid_2-mail-warning.svg?v=1c1c9c815d7b33c1f4d28c1c282a3b55d47bb8e95b6672d92126941883dad058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
