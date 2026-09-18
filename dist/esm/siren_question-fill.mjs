export const name="siren_question-fill";
export const id="dl_0a8a781e4308451ab3ef";
export const url=new URL("../icons/S/siren_question-fill.svg?v=94a2629334a9678308db363e3ef13b6db980051ae9bb495856b1a083ff4611c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
