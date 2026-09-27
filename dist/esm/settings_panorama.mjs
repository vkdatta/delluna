export const name="settings_panorama";
export const id="dl_89db90f116e147be68c2";
export const url=new URL("../icons/settings_panorama.svg?v=b7a0ae78a6354d1e60d0441b5090f8e37b9f21543a1cc66f847736817f6ead1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
