export const name="sports_baseball-fill";
export const id="dl_738cfde68bfe43bc9a08";
export const url=new URL("../icons/sports_baseball-fill.svg?v=c17571b3fc2eb1474e0b8e387b8b5767b39facfd99d2c4814036f4a9994afbca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
