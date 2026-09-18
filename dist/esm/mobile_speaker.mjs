export const name="mobile_speaker";
export const id="dl_d76d2393a78b4ed78ce9";
export const url=new URL("../icons/mobile_speaker.svg?v=5122132b803f49cc230a6b00f38d22dd0ca1d32b93bebfe59e13909f96689a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
