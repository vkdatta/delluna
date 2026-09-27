export const name="notification-fill";
export const id="dl_4a0b7cc523c24e529a85";
export const url=new URL("../icons/notification-fill.svg?v=2ed63ab936f7e7793e8e34237819ae90264272b08cfd0be1012ed4e08b26c61c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
