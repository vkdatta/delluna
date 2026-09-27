export const name="other_houses";
export const id="dl_5dc83b7fd0757e0b3496";
export const url=new URL("../icons/other_houses.svg?v=07879e1eca789ecfcf5460442555a57dd0a2050dd8281c1db8f538ab760b5b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
