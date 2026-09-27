export const name="format_bold-fill";
export const id="dl_163f888839708add4062";
export const url=new URL("../icons/format_bold-fill.svg?v=fbd5813788aec9646dd6df0de71270406646500e9a30b6037edbbc672e6b3b29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
