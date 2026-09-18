export const name="do_not_disturb_off-fill";
export const id="dl_1dd76085e18e4b6696b1";
export const url=new URL("../icons/do_not_disturb_off-fill.svg?v=e891da6d07c8f9192adebadd6cb3bc7361b98fb23ea8ee0f36bc77ae4052ae30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
