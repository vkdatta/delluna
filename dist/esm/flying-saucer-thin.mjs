export const name="flying-saucer-thin";
export const id="dl_33e9945018034fe59aeb";
export const url=new URL("../icons/flying-saucer-thin.svg?v=7ab30165b35ac216bcde165b0625d0d7c095b17c44460cb228eff1b366e65ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
