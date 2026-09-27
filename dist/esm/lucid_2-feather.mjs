export const name="lucid_2-feather";
export const id="dl_1d2297fb1d604ab6853f";
export const url=new URL("../icons/lucid_2-feather.svg?v=87fdf9eab0da5ca689432c5252d6ceb3242e635d776a4aa8e7ee4409450a2823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
