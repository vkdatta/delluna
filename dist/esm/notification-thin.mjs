export const name="notification-thin";
export const id="dl_e01c8b934425406691f3";
export const url=new URL("../icons/notification-thin.svg?v=2cf80b9898ac48630534f34e410fdf468546aa40db6b8951a134efd173c4cb0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
