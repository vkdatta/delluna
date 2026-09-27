export const name="file-ts-thin";
export const id="dl_73b4d7d2137f4cd98c22";
export const url=new URL("../icons/file-ts-thin.svg?v=993d57ea374ee340e3c1d0d287ec06d649596cbf93b3376f28daa4ff2563aae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
