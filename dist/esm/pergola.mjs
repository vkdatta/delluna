export const name="pergola";
export const id="dl_fd37ac4b94fd4d34aa59";
export const url=new URL("../icons/pergola.svg?v=02ecced1affb679b78633f34f4fa0bc85797363185c3e18798bf41197aa4a5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
