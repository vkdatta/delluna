export const name="kettle";
export const id="dl_51652a14bfa99e518e05";
export const url=new URL("../icons/kettle.svg?v=77f3e75dd2ccca60850d195ec95bd39a465f66b7022fa2687320b74200ed8522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
