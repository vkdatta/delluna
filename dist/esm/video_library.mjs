export const name="video_library";
export const id="dl_2a36ecc8bc7d4d8f9a70";
export const url=new URL("../icons/V/video_library.svg?v=c48faaa6e711a1a756f5005cfbe2f1af91146f84ac2a1e5f8d16b93e1947d6f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
