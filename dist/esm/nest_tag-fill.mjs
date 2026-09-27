export const name="nest_tag-fill";
export const id="dl_158769d9523c2f818cfd";
export const url=new URL("../icons/nest_tag-fill.svg?v=c35c19ad70ae2d2e6f2239bebd1787d1ee79208870e86307f6401813de8585d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
