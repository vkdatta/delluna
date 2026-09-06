export const name="lucid_3-ship";
export const id="dl_7fed8ae44a02434aac74";
export const url=new URL("../icons/lucid_3-ship.svg?v=61b7e6a279c6e38ac07885472b56948c8a4bc32864ab6f94b8c6ba508fd81966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
