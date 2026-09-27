export const name="boot";
export const id="dl_342b74de670f4b1b9bec";
export const url=new URL("../icons/boot.svg?v=f734bdc46a8cdd6e0544c552b1ec0e68f95ce5b829061da8f0c9bc09ea4ec36b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
