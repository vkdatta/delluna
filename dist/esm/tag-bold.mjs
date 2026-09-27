export const name="tag-bold";
export const id="dl_461b9883792c0107d053";
export const url=new URL("../icons/tag-bold.svg?v=7bdf39d2c0407411c048d20be9b179430d32441a93de2e6caf421debf7132c63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
