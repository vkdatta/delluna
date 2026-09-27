export const name="jamboard_kiosk";
export const id="dl_a119b625335ef8d40be2";
export const url=new URL("../icons/jamboard_kiosk.svg?v=44a5c91b9d7f0cd7b80d051a3699bab1b61c8e663659106302fbaf6344783d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
