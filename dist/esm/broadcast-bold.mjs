export const name="broadcast-bold";
export const id="dl_e5255b0970e04ed1a1a4";
export const url=new URL("../icons/broadcast-bold.svg?v=afbc24e49693f44e46ee24555fb95212536e19f7d99c040f227bd8411ab2e2e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
