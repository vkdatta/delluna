export const name="orange-slice-thin";
export const id="dl_ee59532f62d248bdac58";
export const url=new URL("../icons/orange-slice-thin.svg?v=747bd7bb606d6990df9f7061c5c05a5453439a19815f309eddb8c164ce43bf21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
