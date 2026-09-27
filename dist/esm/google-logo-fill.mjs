export const name="google-logo-fill";
export const id="dl_26275e1c501e4a21994a";
export const url=new URL("../icons/google-logo-fill.svg?v=604e5120523c528187ff798b0d0f958e1e7b081610df9d5d27baeb27fddc2b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
