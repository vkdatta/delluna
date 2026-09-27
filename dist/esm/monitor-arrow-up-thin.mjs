export const name="monitor-arrow-up-thin";
export const id="dl_5fa953de5045477a9640";
export const url=new URL("../icons/monitor-arrow-up-thin.svg?v=0568cc1a7b95f7f5f24cf117ca26243d519d2971da65f7b28230b7b6ce89d340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
