export const name="trending-up-down";
export const id="dl_e587c032a788459f8caf";
export const url=new URL("../icons/trending-up-down.svg?v=52a7f333d2567f49b5354e55ccdddb8782b41b447b006a8b6deacbab14fae3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
