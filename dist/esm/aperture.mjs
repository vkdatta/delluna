export const name="aperture";
export const id="dl_4f0fb02c9dd3438a86d1";
export const url=new URL("../icons/aperture.svg?v=f01d82330e09dc45499f0f80fbdb887580f6eff89ca24a9169f1e929c44070e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
