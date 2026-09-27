export const name="wave-sawtooth-bold";
export const id="dl_841509618c33014231e2";
export const url=new URL("../icons/wave-sawtooth-bold.svg?v=56cd8ff6071b1fa5f165373f8281becdf9e275cd3bbd8510a3b59b5027bca7d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
