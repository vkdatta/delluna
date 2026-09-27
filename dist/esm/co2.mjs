export const name="co2";
export const id="dl_863293825cff52dcbf2d";
export const url=new URL("../icons/co2.svg?v=e8b77fd4feff10b1c36219250411fdb74a016b1d40d6570afa89a02795731f39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
