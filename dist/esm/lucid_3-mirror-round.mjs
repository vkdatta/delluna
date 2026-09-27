export const name="lucid_3-mirror-round";
export const id="dl_71b922cc747d4ff9a9b7";
export const url=new URL("../icons/lucid_3-mirror-round.svg?v=36b6ac7c62aa85aeb353661dca3043fb300e94bf00111f133d18d7efe35d3351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
