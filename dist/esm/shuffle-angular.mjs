export const name="shuffle-angular";
export const id="dl_d8f743d352a337bc0972";
export const url=new URL("../icons/shuffle-angular.svg?v=0557b348ff5ceec2e19ba52e892beb6d948bf956965eb0209f0fc10d98c5a731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
