export const name="ladder-fill";
export const id="dl_2417d711d31a4e98b808";
export const url=new URL("../icons/ladder-fill.svg?v=bccfdb9b1dfdfacb379d60b69b8fe357e3169208dea59996fb718e58b9a16432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
