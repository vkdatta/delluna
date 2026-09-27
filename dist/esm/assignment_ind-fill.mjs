export const name="assignment_ind-fill";
export const id="dl_613a56755072c1b8e335";
export const url=new URL("../icons/assignment_ind-fill.svg?v=18752a68577d91404c534b3792c651d03d0f6715226e3d78c0770d32b9dfe5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
