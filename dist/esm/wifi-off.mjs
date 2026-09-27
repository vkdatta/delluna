export const name="wifi-off";
export const id="dl_12da83f3c3df4d69ae2e";
export const url=new URL("../icons/wifi-off.svg?v=54bd3fe63d77de828d73e512d4cbe473ed8d47b7c0a94c9a77e7155fca2407b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
