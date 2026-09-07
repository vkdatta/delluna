export const name="shuffle-angular";
export const id="dl_baea105d601f4e07abe2";
export const url=new URL("../icons/S/shuffle-angular.svg?v=162dd6d67cca3dd295a645b8114767b91d72407b13923d7375883043b42cd836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
