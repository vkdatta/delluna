export const name="arrow_split-fill";
export const id="dl_de76bf816e0cc1f48f8b";
export const url=new URL("../icons/arrow_split-fill.svg?v=09afa6264383e7d964142130db52de19d6b3374ed9c09fad27b0248169e1dae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
