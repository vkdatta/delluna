export const name="door-open-bold";
export const id="dl_25eea19baafe4265a4f8";
export const url=new URL("../icons/door-open-bold.svg?v=4eaf1136d8a826569a4ccb510c33f03871abfec3805c35df2bbe042270923c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
