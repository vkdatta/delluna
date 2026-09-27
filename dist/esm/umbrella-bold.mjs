export const name="umbrella-bold";
export const id="dl_9225c9f271a5cdc3b77e";
export const url=new URL("../icons/umbrella-bold.svg?v=e82aca117fc4c168de81c56ef5e8b0da10cc2b1fe6de457fb73c237a658c52f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
