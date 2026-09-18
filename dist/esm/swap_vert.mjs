export const name="swap_vert";
export const id="dl_dcdeb9c611c8471aaa1b";
export const url=new URL("../icons/swap_vert.svg?v=0e10526028fa169305008484b0c6cb5ddbfd8332791a1838ee31dd87546800be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
