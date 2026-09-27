export const name="subtitles-fill";
export const id="dl_610cf757235692d8e902";
export const url=new URL("../icons/subtitles-fill.svg?v=ac40e68923f278b26ddb0ca41b28442a7466e08c512dd77d550f48e3f0ebd64f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
