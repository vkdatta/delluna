export const name="body_fat-fill";
export const id="dl_06f2b6b802af42078798";
export const url=new URL("../icons/B/body_fat-fill.svg?v=1a3442d4c7bea274079363c3176c42492be089165a5b8d3dcdadefbaee930b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
