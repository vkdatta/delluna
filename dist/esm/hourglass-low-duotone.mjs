export const name="hourglass-low-duotone";
export const id="dl_4799a51885994bb5b6c4";
export const url=new URL("../icons/hourglass-low-duotone.svg?v=4bfa2b83f527b51f416e1c3af10c233120b4457e1fa5d41b9f5d9a5b4531ef6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
