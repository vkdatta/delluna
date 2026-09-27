export const name="hourglass-simple-bold";
export const id="dl_2aab7d8c8c7a4de296e7";
export const url=new URL("../icons/hourglass-simple-bold.svg?v=eb60d738718bb121d7175d2b7c2b6d5cb3f5a16698d4c393bb94fc08b60721fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
