export const name="sparkle-duotone";
export const id="dl_c72688a8dcd733d7d44e";
export const url=new URL("../icons/sparkle-duotone.svg?v=0607f5dec3b193dac4e0097fb746d01d013bf4172b907e827694e9eb0e8da875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
