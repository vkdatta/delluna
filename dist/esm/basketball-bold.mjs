export const name="basketball-bold";
export const id="dl_da092d36578c49808329";
export const url=new URL("../icons/basketball-bold.svg?v=80268c28d871c5d01b511ed9f6cee77bc125b698d7a16352dd0a9ef4d1a541e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
