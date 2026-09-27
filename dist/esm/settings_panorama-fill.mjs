export const name="settings_panorama-fill";
export const id="dl_500006331abee56fd069";
export const url=new URL("../icons/settings_panorama-fill.svg?v=4d1983249b51088412965226892334ee552251b842aeee95f3919a443d9eb0a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
