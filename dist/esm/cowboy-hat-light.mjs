export const name="cowboy-hat-light";
export const id="dl_f965bbe9d1654c1380b3";
export const url=new URL("../icons/cowboy-hat-light.svg?v=c7e0d5032de92fe20729119d0ccadce0d8acc8ceb7fec5b66be6c55849851b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
