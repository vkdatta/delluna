export const name="arrow-circle-down-left-duotone";
export const id="dl_6fbfd1eb7d2247b29b79";
export const url=new URL("../icons/arrow-circle-down-left-duotone.svg?v=c0ac431872425220b4c4cb198a6510acf33b2a65e34bfe2c2ab5d4a1d48cede3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
