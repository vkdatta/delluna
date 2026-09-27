export const name="star-half-light";
export const id="dl_3c984a8eb381c958b652";
export const url=new URL("../icons/star-half-light.svg?v=b07aea1b452d769257760de58196ae5813536f5d0fb561256d4038481bb6ec0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
