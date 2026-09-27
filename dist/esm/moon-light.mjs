export const name="moon-light";
export const id="dl_252066b019374ae192a2";
export const url=new URL("../icons/moon-light.svg?v=deb55ed339b9b97c211c6ec31196b819559872a7298775acf6c1f271c2d0fb70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
