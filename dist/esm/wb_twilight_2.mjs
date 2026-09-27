export const name="wb_twilight_2";
export const id="dl_b38d71688426b90b5064";
export const url=new URL("../icons/wb_twilight_2.svg?v=5aab8d015093e018d4ea40a573300849734515c1ab239a74d70b5721cfd5fab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
