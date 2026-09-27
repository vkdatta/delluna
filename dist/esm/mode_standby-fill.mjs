export const name="mode_standby-fill";
export const id="dl_876529fc8cd6c48ab7bc";
export const url=new URL("../icons/mode_standby-fill.svg?v=3cd97ac854a8f061459062a68a072f959939a0dea65f3edd26634737add30025",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
