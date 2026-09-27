export const name="shooting-star-light";
export const id="dl_14e341aae1120c45d47c";
export const url=new URL("../icons/shooting-star-light.svg?v=20ba9a6b549cbb3d1e0a86c17b097236050b94bfa275afee9a7e9cecbcfca09a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
