export const name="align-center-horizontal-simple-thin";
export const id="dl_692b2ca677b144e3b522";
export const url=new URL("../icons/align-center-horizontal-simple-thin.svg?v=822417eb6e893b3b4bb910353b1fb28088655cb9b9deb8be52d8b7a3e6e68748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
