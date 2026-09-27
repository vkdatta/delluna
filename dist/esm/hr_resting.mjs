export const name="hr_resting";
export const id="dl_e963fc5319bdec518c7c";
export const url=new URL("../icons/hr_resting.svg?v=17db0855dfcb2a0457c8bd0b64ad2b00b2b8cb47e8449cf336d716c83429f346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
