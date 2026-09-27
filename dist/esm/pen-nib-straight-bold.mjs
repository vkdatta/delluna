export const name="pen-nib-straight-bold";
export const id="dl_5976d4dec2a74c0e9774";
export const url=new URL("../icons/pen-nib-straight-bold.svg?v=4b8abdc95f2ff2a63b6139e83cde9bcd57552f95bf7f65432b6b0a571a2e29b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
