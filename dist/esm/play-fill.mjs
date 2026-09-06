export const name="play-fill";
export const id="dl_c74cfe49492a4d9a8a4a";
export const url=new URL("../icons/play-fill.svg?v=6d2a75bc5700a68dec50516ebae121c307807e4e6fcca5c863e5b4af006df880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
