export const name="crib";
export const id="dl_17e137dafeb142be06de";
export const url=new URL("../icons/crib.svg?v=72a9e104931819840ecb90414fc600ad2f43a219822a5d4530b8f50353ff2206",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
