export const name="notification_sound";
export const id="dl_2799375cd35cb1edf897";
export const url=new URL("../icons/notification_sound.svg?v=df4108ccddf4d18750d86a329702ae93116e5b0cc6d3e1e67887da8edb8c2947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
