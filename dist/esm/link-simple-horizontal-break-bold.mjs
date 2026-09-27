export const name="link-simple-horizontal-break-bold";
export const id="dl_abde19a1916e4efe89a9";
export const url=new URL("../icons/link-simple-horizontal-break-bold.svg?v=14ac5d5c415b25322d7e79dc2b5a52d7c9d19b795a1dba6f7109442c826c8026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
