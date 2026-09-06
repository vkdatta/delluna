export const name="coda-logo-duotone";
export const id="dl_472e68a24cdd40f195ca";
export const url=new URL("../icons/coda-logo-duotone.svg?v=c86e5d45e9112f55fb216be687c6282024b021acf5973bcbd678fe1ba7fd7388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
