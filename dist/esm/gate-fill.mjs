export const name="gate-fill";
export const id="dl_fd643d90e68c4276a244";
export const url=new URL("../icons/G/gate-fill.svg?v=d27e719bb26d89dcb30894f54f2484778220dcb9ed499347aee4554600980a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
