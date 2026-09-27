export const name="list_alt_check";
export const id="dl_2e2961bc6deb01a0477f";
export const url=new URL("../icons/list_alt_check.svg?v=3757b3ac5d4c98cf055c4ddf34768cd21ed8302fc30296935610a6eba1ce9b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
