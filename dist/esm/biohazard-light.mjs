export const name="biohazard-light";
export const id="dl_68c30ce1274f4daca0b2";
export const url=new URL("../icons/biohazard-light.svg?v=277d79d192dce610379b0c590f1e7a889ec10cdc7a6f21f4612c5c24ef859afc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
