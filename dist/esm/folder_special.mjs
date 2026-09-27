export const name="folder_special";
export const id="dl_f6b19cadc83e1a1692c3";
export const url=new URL("../icons/folder_special.svg?v=1cec051eb7abe0b272af9550924416cbddf36668249d960e44d5abd2fc46031a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
