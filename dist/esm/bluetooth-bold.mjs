export const name="bluetooth-bold";
export const id="dl_a182070cefc7464590a9";
export const url=new URL("../icons/bluetooth-bold.svg?v=d1bee43a0bc94c3ba291b8fdc8c0e8d07d75972418bace5ed8d22cafc259af62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
