export const name="fluorescent";
export const id="dl_6634d1761cfd697741b7";
export const url=new URL("../icons/fluorescent.svg?v=e962aeabde9acdaea6c6ff4c96fcfd9af411d9c78da31f0cd1dbe288d6fe7522",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
