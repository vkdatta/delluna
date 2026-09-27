export const name="clock";
export const id="dl_c83561e145c7484291fc";
export const url=new URL("../icons/clock.svg?v=7c9ab88e9fabf8dfcbca12972bdaf46bafd4b26c0a03f4a4de787a6309c113cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
