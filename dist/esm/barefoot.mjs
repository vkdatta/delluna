export const name="barefoot";
export const id="dl_21ee6b00c5618dcf354f";
export const url=new URL("../icons/barefoot.svg?v=9cfbcc7eb2ead31e3b121bad1a540ac032ae8214f3b4efbbcd5a6590a9555cc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
