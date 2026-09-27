export const name="lucid_2-ice-cream-cone";
export const id="dl_fd42b980a99b4c4084ea";
export const url=new URL("../icons/lucid_2-ice-cream-cone.svg?v=ea559ae62373032f528a1641ad5223f141a7d7bce1f88b6cecb2363c21606edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
