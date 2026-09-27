export const name="unfold_up";
export const id="dl_a5f7e1c423537f77f3e8";
export const url=new URL("../icons/unfold_up.svg?v=b49d2852f24c624c335c1799d1be7ae0024253beeb5b5d1b8f0055aeb76ff3dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
