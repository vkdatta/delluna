export const name="emergency_share";
export const id="dl_cff2485bfd9eed0b3934";
export const url=new URL("../icons/emergency_share.svg?v=8894c57b0d003438965423db7f9072278c00506c45542ed0b9413319025ea76e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
