export const name="eyes";
export const id="dl_b67225165f0a4b96be57";
export const url=new URL("../icons/eyes.svg?v=f7b97e897b9ed86f8aa6768fb2c38a4a7b9d2b2ce97c2475d4f4e08d79c64766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
