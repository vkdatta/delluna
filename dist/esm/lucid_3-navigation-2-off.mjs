export const name="lucid_3-navigation-2-off";
export const id="dl_dabea2a0c8a4405e829f";
export const url=new URL("../icons/lucid_3-navigation-2-off.svg?v=0ff47d21b3274156f9602239cf6fc15230b0e9ea6bffc3ec8daba972b7e6dd6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
