export const name="box-arrow-up";
export const id="dl_7402ff185f4841f980e7";
export const url=new URL("../icons/box-arrow-up.svg?v=5b91128e08918a9fd48e71a5532ac10b3004dfe13db9949da57a817aa4af6822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
