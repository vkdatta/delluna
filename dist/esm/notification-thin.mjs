export const name="notification-thin";
export const id="dl_e01c8b934425406691f3";
export const url=new URL("../icons/notification-thin.svg?v=e840148de4e33fce007cc3c1a8564161273bce2afae00b2664eb2558be812ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
