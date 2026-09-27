export const name="cached-fill";
export const id="dl_54799fdab979ee60ca11";
export const url=new URL("../icons/cached-fill.svg?v=6f2bb54bb3cb3730ee72532be028f441ddb00c5468056285d6c27559d6edf4f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
