export const name="file-video-fill";
export const id="dl_f7d779b8ab0c4c7f8d21";
export const url=new URL("../icons/file-video-fill.svg?v=fe66727b7ad63d1ef72587431bdcc2629e995429616b3758b8c142bfa9c66bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
