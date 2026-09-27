export const name="lucid_1-case-upper";
export const id="dl_2c07a38fb8db4d98912c";
export const url=new URL("../icons/lucid_1-case-upper.svg?v=d724b5d627eb875bf1c48785e05373c2ff2acf4463324d4636aeae4b77839e0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
