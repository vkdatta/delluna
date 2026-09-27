export const name="view_in_ar_off";
export const id="dl_19a61e5e2b91c7e83c68";
export const url=new URL("../icons/view_in_ar_off.svg?v=90612b8ef8e7d8460b9fff1905c72b6201a11e25c45e45b83fc74510d6e7bc44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
