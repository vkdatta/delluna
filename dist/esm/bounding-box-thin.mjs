export const name="bounding-box-thin";
export const id="dl_5ec530a693a54582976d";
export const url=new URL("../icons/bounding-box-thin.svg?v=6b93f7df1a2403896c71254e03ca143c747adb33fea6cbff81ea7cc380dec527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
