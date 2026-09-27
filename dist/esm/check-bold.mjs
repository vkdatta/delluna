export const name="check-bold";
export const id="dl_2d27fe36a0304005aff4";
export const url=new URL("../icons/check-bold.svg?v=3e6864a5962d0bd7b7ddeadc50864a6a1597a22c3424ed0be0a04a129affca65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
