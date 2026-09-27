export const name="lucid_3-shield-off";
export const id="dl_0f3581031fc44538b002";
export const url=new URL("../icons/lucid_3-shield-off.svg?v=7557109061c6d08e1ee77d4c9eae8778743660bd36f0990d556c2e46a5d3a932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
