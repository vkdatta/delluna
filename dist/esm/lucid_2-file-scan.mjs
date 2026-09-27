export const name="lucid_2-file-scan";
export const id="dl_25a004aa170040e3bd8a";
export const url=new URL("../icons/lucid_2-file-scan.svg?v=32cdb26ee7859b1d65c00ba66d23074b08d2475c7481fac70b0a883cf54bbf60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
