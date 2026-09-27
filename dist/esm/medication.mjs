export const name="medication";
export const id="dl_2311b052b50958182d63";
export const url=new URL("../icons/medication.svg?v=a891f745cedb07ee100f9a2bb8767f6ba61e1ce6c462ebe9a9d35b3936c7e2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
