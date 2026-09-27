export const name="gear-fill";
export const id="dl_718169e70b1b44ca8804";
export const url=new URL("../icons/gear-fill.svg?v=13ff98edee19c23a02dad0324e9ae7582fc0147fe6dc96ecd0baf8070e65e816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
