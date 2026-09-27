export const name="hourglass-low-fill";
export const id="dl_16ebab0ed117468aa84d";
export const url=new URL("../icons/hourglass-low-fill.svg?v=e58ea122114e83082e34031b9f5942dd693699a604b3f938ec43b1dfc74d386e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
