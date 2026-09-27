export const name="notification_audio";
export const id="dl_13bec8a258d079c992f6";
export const url=new URL("../icons/notification_audio.svg?v=e05ef1ba1e6d72d293d184eacc71b0a77bcf00861920780b25215ecc4437a2c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
