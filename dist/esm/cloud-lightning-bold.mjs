export const name="cloud-lightning-bold";
export const id="dl_e49a3be93fb646a78d50";
export const url=new URL("../icons/cloud-lightning-bold.svg?v=bd092bee7140da1b79488b498dcbb634026c960bb0a86fc16b1ee2b100fb0d80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
