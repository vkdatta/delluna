export const name="lucid_3-shield-plus";
export const id="dl_51205f51211b47caae4b";
export const url=new URL("../icons/lucid_3-shield-plus.svg?v=42274dfaebc4e38646d065155b928c6d2cae8d9541ff2031f0b5b733e5e1077a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
