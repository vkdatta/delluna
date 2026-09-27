export const name="air_freshener";
export const id="dl_20494d84d2049ce70644";
export const url=new URL("../icons/air_freshener.svg?v=923b65b0ccb66f7e90ea3a2f25d65c86bb1b87e52f8c125c7d521e23306d7e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
