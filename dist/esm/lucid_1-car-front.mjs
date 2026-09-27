export const name="lucid_1-car-front";
export const id="dl_9d6b1e35e4d04211b868";
export const url=new URL("../icons/lucid_1-car-front.svg?v=7f67f911a029427143efcdecffe90d520a1f0854c266056b13f0ce038846b836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
