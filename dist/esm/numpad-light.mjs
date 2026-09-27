export const name="numpad-light";
export const id="dl_663f9524b7f849a6af2e";
export const url=new URL("../icons/numpad-light.svg?v=35a8765a4ebee0f569338cc0563426a725047c8a0a12822c18b5b4a34de52b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
