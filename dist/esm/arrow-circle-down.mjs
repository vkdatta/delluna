export const name="arrow-circle-down";
export const id="dl_344776373dbe4fff87fa";
export const url=new URL("../icons/arrow-circle-down.svg?v=567d46427dd38c09fa613175de6276c0cd9e5ac5a7698fd2f3c5e46f885e6282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
