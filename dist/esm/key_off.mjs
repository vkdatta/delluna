export const name="key_off";
export const id="dl_a988628e412e3129befc";
export const url=new URL("../icons/key_off.svg?v=a359ca78aeffdeedcee2664755d974a3b5ab0421915fb2a629822a851733fec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
