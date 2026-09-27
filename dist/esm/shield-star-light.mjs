export const name="shield-star-light";
export const id="dl_daa0e61b81e607f666c3";
export const url=new URL("../icons/shield-star-light.svg?v=c735665d93915ba36d7da8664fbbb72894d1ce63303fe5d5e7e9c16dc7414589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
