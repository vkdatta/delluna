export const name="airplane";
export const id="dl_a7997e874b5343fbb2ba";
export const url=new URL("../icons/airplane.svg?v=f6891e31b4488875c7d14fbabe3f1da657ba33555324331d0acf5ecaac7680df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
