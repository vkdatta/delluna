export const name="cloud-x-thin";
export const id="dl_eb34554bc2a14e8ab258";
export const url=new URL("../icons/cloud-x-thin.svg?v=18c9ede8adf854ddd2f76feda3e19eb55c56773c25dac734bcc88d084dd97940",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
