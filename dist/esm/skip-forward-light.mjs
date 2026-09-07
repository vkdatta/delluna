export const name="skip-forward-light";
export const id="dl_c582e5839aef460aa45a";
export const url=new URL("../icons/S/skip-forward-light.svg?v=6b01a0e1d0e48396a688b1b05d376cb0628c500dbb8f52594d2d16fd4b562da7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
