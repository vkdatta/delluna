export const name="stool-fill";
export const id="dl_088728c1cfcb031fce29";
export const url=new URL("../icons/stool-fill.svg?v=e42faf22f6e71b9e2c91377497775a88f51d6a62a38e3eabcb7fdb0868cbc3fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
