export const name="wave-triangle";
export const id="dl_78f3abc2e63dd9609982";
export const url=new URL("../icons/wave-triangle.svg?v=9ec47b27d810280c286563426bf3c54d85483024efedcba0d3d201542165db4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
