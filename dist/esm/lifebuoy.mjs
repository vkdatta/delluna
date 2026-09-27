export const name="lifebuoy";
export const id="dl_3e78961076c048a28390";
export const url=new URL("../icons/lifebuoy.svg?v=81b96855094e62351aea24a67247f0011f29fa313f74f4405df53a8f0d10d661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
