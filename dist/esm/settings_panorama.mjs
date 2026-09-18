export const name="settings_panorama";
export const id="dl_4ae9caca9bbe48fbbddd";
export const url=new URL("../icons/S/settings_panorama.svg?v=8183440b4de0d4981d3e779a56b695a0df93e4a2223d2918a7aae6281deb4387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
