export const name="film-script";
export const id="dl_efa8313d880a4fc08338";
export const url=new URL("../icons/film-script.svg?v=758ed158b18954376eabf2d362702f8499c09c5366967af9ed2eb2a4f0cbf664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
