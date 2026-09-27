export const name="nightlight";
export const id="dl_7a57e8e768fd043b1240";
export const url=new URL("../icons/nightlight.svg?v=e5c4fe67b9c9504c75618af801967a91f22e38f71c7b0af2575f1c0fd2ae8818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
