export const name="visibility_lock";
export const id="dl_89c6355ee2b94da0ac79";
export const url=new URL("../icons/visibility_lock.svg?v=0cd032dc714825a53b4ac6445632c5310972916f0195675b62e2868783a5d857",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
