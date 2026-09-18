export const name="sim_card_download-fill";
export const id="dl_203c3811ec3c4e8b91a6";
export const url=new URL("../icons/S/sim_card_download-fill.svg?v=08317e0bcc32eb02da7efc92168bf831bdf05c596d61e5c41cdc141a8464b3e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
