export const name="tablet";
export const id="dl_bc36c5e8381e4ed3beed";
export const url=new URL("../icons/tablet.svg?v=56585d886d5069d21f4dc55e1deb258b23cefa87cd4091fad0d434a25939cf4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
