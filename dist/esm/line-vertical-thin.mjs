export const name="line-vertical-thin";
export const id="dl_21aa279c8950477e86eb";
export const url=new URL("../icons/line-vertical-thin.svg?v=5b6923657a81243583853261fd47e1a5ebce773f532e6ab05962208898da2d28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
