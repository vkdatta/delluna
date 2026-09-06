export const name="radio-button-fill";
export const id="dl_c0498b29fbc648b7a80a";
export const url=new URL("../icons/radio-button-fill.svg?v=929cf0f3ca24d83caf70abf6b30161a9763bddace68ea9cce2c831a76fc459ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
