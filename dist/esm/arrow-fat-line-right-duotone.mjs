export const name="arrow-fat-line-right-duotone";
export const id="dl_8c339143642249348ec7";
export const url=new URL("../icons/arrow-fat-line-right-duotone.svg?v=9ea289c815144df177a3400d1718b1a1c7ac0d764f3674d0e544e9153f6e10db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
