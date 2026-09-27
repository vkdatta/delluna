export const name="list-dashes-thin";
export const id="dl_2dc5df2c96234f898e01";
export const url=new URL("../icons/list-dashes-thin.svg?v=bb1d77635ea6c8c9c740c4874ed90d8c7ecf952feb638b3ad2ad7ca49ad9f634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
