export const name="airplane-taxiing-fill";
export const id="dl_781f555ccf7a4809b735";
export const url=new URL("../icons/airplane-taxiing-fill.svg?v=d3637887eaef3749f1222769514aa900c566d7b3476ef50b40dbac4e46183ec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
