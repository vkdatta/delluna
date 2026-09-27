export const name="adjust-fill";
export const id="dl_fda01e868099a9678d8e";
export const url=new URL("../icons/adjust-fill.svg?v=3cd97ac854a8f061459062a68a072f959939a0dea65f3edd26634737add30025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
