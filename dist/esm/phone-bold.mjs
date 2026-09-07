export const name="phone-bold";
export const id="dl_c49d06e24e954fb7a45f";
export const url=new URL("../icons/phone-bold.svg?v=61826bd13e5100b0079815888c38338ef4586d0febb96ad0e8c9420f5ea27a60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
