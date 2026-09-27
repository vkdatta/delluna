export const name="rheumatology";
export const id="dl_dbdae2c866beff66e1ad";
export const url=new URL("../icons/rheumatology.svg?v=a5a65bd7d46315e9ab65051dc723c96176442dbd1f5093aa44268a6d8a0c093d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
