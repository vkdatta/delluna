export const name="flame-bold";
export const id="dl_cf29fed74af0473c9191";
export const url=new URL("../icons/flame-bold.svg?v=2b9ee7953dcb62ffa4b8b7b0056589779a023c94ab8729071b600423f5fbf873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
