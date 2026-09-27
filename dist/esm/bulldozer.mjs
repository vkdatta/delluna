export const name="bulldozer";
export const id="dl_9e0dcf2238de48a2a992";
export const url=new URL("../icons/bulldozer.svg?v=95f0552bb8d84cfdac17a800f1aa5237d864709c49b8d1e046fb955f6b398dfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
