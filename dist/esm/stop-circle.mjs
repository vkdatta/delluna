export const name="stop-circle";
export const id="dl_73a46c3ad7ec405baf24";
export const url=new URL("../icons/S/stop-circle.svg?v=3bb4ad4299117aef1415eb9716f17613559ad01e15720ee328279eb9711d4528",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
