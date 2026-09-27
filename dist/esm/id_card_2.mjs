export const name="id_card_2";
export const id="dl_fa8605c8c233d81c79fa";
export const url=new URL("../icons/id_card_2.svg?v=650d68fa36bdc27573c708f43634394e02c692f3eeae7e4cf118da36c27b0f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
