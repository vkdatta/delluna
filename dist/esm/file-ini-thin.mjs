export const name="file-ini-thin";
export const id="dl_fd66f614afb644e2ba56";
export const url=new URL("../icons/file-ini-thin.svg?v=da151ef2ce6bfe1a4186c273bc559b51b7da477dca289164f10f89d8304b7b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
