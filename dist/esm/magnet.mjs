export const name="magnet";
export const id="dl_1825d346cf8b4b84bfdd";
export const url=new URL("../icons/magnet.svg?v=94246cb63dfff7991b8071d75f94db0d6527806641a452f6a04457162317c396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
