export const name="trend-down-duotone";
export const id="dl_347718d630bcb67d6714";
export const url=new URL("../icons/trend-down-duotone.svg?v=914f6a431b0340d7cf10a7c1526815a0e3995f2174db7e8df71a6f84747c568b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
