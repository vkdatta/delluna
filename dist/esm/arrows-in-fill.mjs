export const name="arrows-in-fill";
export const id="dl_2310e4faddc14d2aa661";
export const url=new URL("../icons/arrows-in-fill.svg?v=4fb6bdb391b7db63affef9ec2df9567ffe423af3334b652b026cd630793c1124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
