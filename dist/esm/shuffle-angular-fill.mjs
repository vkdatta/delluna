export const name="shuffle-angular-fill";
export const id="dl_dd5054db3752448b8acc";
export const url=new URL("../icons/S/shuffle-angular-fill.svg?v=d12fbc3ffc377a9a866cb0a3b136ab8acdc03cbf02c4c492bb2f7f9fde6819a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
