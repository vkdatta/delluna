export const name="shuffle-simple-duotone";
export const id="dl_645d8901e82e40ac99d7";
export const url=new URL("../icons/S/shuffle-simple-duotone.svg?v=42671c0d303e95f8401c1c3317cd80c0a9be19300c3a330985b91d8249d68491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
