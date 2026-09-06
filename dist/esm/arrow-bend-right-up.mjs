export const name="arrow-bend-right-up";
export const id="dl_2abc7f97d9014c8d809c";
export const url=new URL("../icons/arrow-bend-right-up.svg?v=923b05acc8e0b4e69380879c4c81b9df64f6a9875d147bfd6efdd9ba337e3a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
