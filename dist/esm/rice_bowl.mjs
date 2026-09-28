export const name="rice_bowl";
export const id="dl_79292d3ea68a506582cb";
export const url=new URL("../icons/rice_bowl.svg?v=ed7e99e23557b14653bee29b45f185f6b1780537748c8acb48389fd8a93a0dfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
