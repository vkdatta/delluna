export const name="user-circle-dashed-light";
export const id="dl_b6310104eafb45b9b213";
export const url=new URL("../icons/user-circle-dashed-light.svg?v=1d0c32d76fd5553b727050b54b21280bccff98753bd540730d353f4d5095fcf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
