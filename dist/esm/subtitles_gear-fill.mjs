export const name="subtitles_gear-fill";
export const id="dl_dab25e734e28e03acad1";
export const url=new URL("../icons/subtitles_gear-fill.svg?v=c00045dfa7e5bcca6d7f0aa4e1a87c327cff3045c79f193b82605d5cf0e6e555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
