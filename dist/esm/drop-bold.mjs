export const name="drop-bold";
export const id="dl_2e1348cca6bd48a4a8be";
export const url=new URL("../icons/drop-bold.svg?v=ea0293f5ffc628dd1eb747d90e8e6cdb95257d0bde0577415ad03c00039ca16b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
