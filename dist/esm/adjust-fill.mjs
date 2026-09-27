export const name="adjust-fill";
export const id="dl_79557e4d612052f417cf";
export const url=new URL("../icons/adjust-fill.svg?v=abf113988c1668034eabde46d7696fa28518a7036fa60c543258d9acf9b5a038",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
