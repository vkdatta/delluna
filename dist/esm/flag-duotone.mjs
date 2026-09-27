export const name="flag-duotone";
export const id="dl_2b7edcee814f4760a314";
export const url=new URL("../icons/flag-duotone.svg?v=0e89825f8efda73a0f69981e7b62912c60f4ee5702986ae1793c667707616a17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
