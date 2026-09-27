export const name="lucid_1-clock-arrow-down";
export const id="dl_b15fb9055f6141068f8c";
export const url=new URL("../icons/lucid_1-clock-arrow-down.svg?v=34e42ab2dc71fff9820cac6087b7859fa5c567d373695e16ec85e7577c5f401f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
