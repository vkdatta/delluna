export const name="bottom_app_bar-fill";
export const id="dl_2fb11f0b21f2b4debfbf";
export const url=new URL("../icons/bottom_app_bar-fill.svg?v=39428f45c85fec194d40d4a9e8ca02d4105236c3f9e02f65d232e6e559a7a47d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
