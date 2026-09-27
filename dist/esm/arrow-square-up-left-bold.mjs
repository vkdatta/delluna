export const name="arrow-square-up-left-bold";
export const id="dl_df6eb8b49fc5456ca39c";
export const url=new URL("../icons/arrow-square-up-left-bold.svg?v=a0d78c0e3dfc30ce899f036606224009cdc6c302f942b9602d009060f1a151c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
