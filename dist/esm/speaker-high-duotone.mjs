export const name="speaker-high-duotone";
export const id="dl_2a5f63ff35254b1ed13f";
export const url=new URL("../icons/speaker-high-duotone.svg?v=9c65eab462e0e7384805135c0d747bbff5798c29b1822b17fa61827c29bfe443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
