export const name="panorama-thin";
export const id="dl_7b0bcf13f54f43d6aa68";
export const url=new URL("../icons/panorama-thin.svg?v=9ed4b271a26a788fc6c7e16a0c5ec7cb7c36d5e58864b6b5e95a536b1a5ad535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
