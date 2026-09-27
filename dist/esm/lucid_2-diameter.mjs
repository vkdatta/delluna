export const name="lucid_2-diameter";
export const id="dl_39988b4996744011bc9a";
export const url=new URL("../icons/lucid_2-diameter.svg?v=01021285b61f5e79e99dc339ab753e4504061e6843312c51f84e82fae8af2bc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
