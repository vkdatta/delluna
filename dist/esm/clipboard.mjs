export const name="clipboard";
export const id="dl_6e6688875bbf423e9c23";
export const url=new URL("../icons/clipboard.svg?v=263e6cd2aecaacdf9ddbf57e9ec38d34a932f98164c46bc4d1ecac2a1de433a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
