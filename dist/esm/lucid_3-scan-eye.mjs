export const name="lucid_3-scan-eye";
export const id="dl_6ba6f27ff8a245f0a9cd";
export const url=new URL("../icons/lucid_3-scan-eye.svg?v=9a62ad8ee9465883cb707506c4a53e9d9f9060b086770eabed0c6fe45126b1a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
