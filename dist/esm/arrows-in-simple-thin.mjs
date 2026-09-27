export const name="arrows-in-simple-thin";
export const id="dl_ae96e0778c6e4864bb08";
export const url=new URL("../icons/arrows-in-simple-thin.svg?v=2531ae5368d7e342c6ffc8c4422149e12d12e912a292b836a049e2e5d32e001c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
