export const name="hand-withdraw-fill";
export const id="dl_de9b5b18a1c645498cd0";
export const url=new URL("../icons/hand-withdraw-fill.svg?v=1db3ca40d907c7541f8ff3812cecda1ff6d7a70b0d74ce0cbbe67b2561914098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
