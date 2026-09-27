export const name="shovel-bold";
export const id="dl_58131f93971712cf4920";
export const url=new URL("../icons/shovel-bold.svg?v=a37372861f6bd077c7609bff29a43188e3e4fdbffbe66a4966da6059727bf56c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
