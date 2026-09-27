export const name="dice-three-light";
export const id="dl_954cbb96891a4887beb2";
export const url=new URL("../icons/dice-three-light.svg?v=c085aec04f0772906b3f89d1d04228145000810d23f3c4ad4d4ecaa0ea0855bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
