export const name="convert_to_text";
export const id="dl_849bb5edd31c6bcff217";
export const url=new URL("../icons/convert_to_text.svg?v=6c111456e90d36044a8b6c26b351d86f76d70253cf1c136ef89b01835a9c7146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
