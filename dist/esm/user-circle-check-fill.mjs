export const name="user-circle-check-fill";
export const id="dl_ee36683a73f82d81e373";
export const url=new URL("../icons/user-circle-check-fill.svg?v=2639c064f8969796218d958fb1b8531025623f079e4fdd729952c1fe4c2dab14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
