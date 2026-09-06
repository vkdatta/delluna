export const name="dice-five-duotone";
export const id="dl_fd2312a9ff6f430496ff";
export const url=new URL("../icons/dice-five-duotone.svg?v=99d41cb228da4157ecc6a3599a304b86ca4646b217537f26c1b840c8be27d379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
