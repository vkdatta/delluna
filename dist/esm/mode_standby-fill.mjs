export const name="mode_standby-fill";
export const id="dl_f02fcd7094509f536252";
export const url=new URL("../icons/mode_standby-fill.svg?v=abf113988c1668034eabde46d7696fa28518a7036fa60c543258d9acf9b5a038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
