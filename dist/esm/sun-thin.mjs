export const name="sun-thin";
export const id="dl_6ec9b2e7feee60ccb975";
export const url=new URL("../icons/sun-thin.svg?v=3c6d5242006ed49d34b25f865b7feec083271282e5ee542e2d4bbe29f3cea2b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
