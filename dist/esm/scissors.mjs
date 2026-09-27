export const name="scissors";
export const id="dl_ee8a501eb7df9e5ddad7";
export const url=new URL("../icons/scissors.svg?v=aca290cfbdaf25e62590014a58bbbc0f208a476391abfa5096f4901e6a3dbeac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
