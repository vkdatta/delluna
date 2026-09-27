export const name="caret-double-left-thin";
export const id="dl_c866cbc9166d4cfb9a19";
export const url=new URL("../icons/caret-double-left-thin.svg?v=2e6de0e7efbab1115f811e6953ba046a3ea0344e54962ecba9df48f0c5fab41f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
