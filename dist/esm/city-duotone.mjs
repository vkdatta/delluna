export const name="city-duotone";
export const id="dl_f592ae4b81f047f2bd67";
export const url=new URL("../icons/city-duotone.svg?v=ea94b4634b0e755c5ecf9a5dac6707c7e033393e9b31460448fc15c015e3101b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
