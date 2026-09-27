export const name="lucid_3-mouse-pointer-2-off";
export const id="dl_de8233360b2b4c34b250";
export const url=new URL("../icons/lucid_3-mouse-pointer-2-off.svg?v=d20f70406d39a00c46efae2a4ac4eef023635c8b4e27ea56f833bfdb95d145d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
