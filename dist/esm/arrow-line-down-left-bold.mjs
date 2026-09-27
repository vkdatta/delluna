export const name="arrow-line-down-left-bold";
export const id="dl_3d457d9a154c4d68bec7";
export const url=new URL("../icons/arrow-line-down-left-bold.svg?v=acf96fe96df1a83ee7cde9ef647e9ed19d24337a36bd1933de63ddfc35615bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
