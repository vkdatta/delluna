export const name="folder-simple-lock-fill";
export const id="dl_f23787123dc742cdae05";
export const url=new URL("../icons/folder-simple-lock-fill.svg?v=0f10379fc5b95d315a85b8f6fb9a2b0532217c6ba40072ee148392a373c7d5d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
