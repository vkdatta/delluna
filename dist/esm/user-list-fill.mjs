export const name="user-list-fill";
export const id="dl_0893587d04297ab558e5";
export const url=new URL("../icons/user-list-fill.svg?v=06e6cc12cdc4cc5113c1672906468fc20711961694dd363602917b2c3064209f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
