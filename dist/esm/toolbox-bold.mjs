export const name="toolbox-bold";
export const id="dl_25b1a053faa04785b3d1";
export const url=new URL("../icons/T/toolbox-bold.svg?v=3af59148550790083af53ad8b938752df50377c954f6ce7d4cef31471405f3ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
