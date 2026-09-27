export const name="lucid_1-bomb";
export const id="dl_4a7a1f22a0b945ac8f60";
export const url=new URL("../icons/lucid_1-bomb.svg?v=b39251b5c62addf2ff0bfa4969423259a1fc78387f2fe9989ae7d5289e723652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
