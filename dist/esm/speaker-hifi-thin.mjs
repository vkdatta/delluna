export const name="speaker-hifi-thin";
export const id="dl_6506d0674b9ad80b8eeb";
export const url=new URL("../icons/speaker-hifi-thin.svg?v=7c6ca2469281b993536e4a8796de9e6e1a1a398b21cd76cc1743ad0d18db0620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
