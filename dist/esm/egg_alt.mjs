export const name="egg_alt";
export const id="dl_81594727898f4f8292af";
export const url=new URL("../icons/E/egg_alt.svg?v=843fac42a97752d9a1e07c1ee816043e4ff6e2fe66b3fbf7a52807b987fd6656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
