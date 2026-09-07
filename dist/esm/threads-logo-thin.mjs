export const name="threads-logo-thin";
export const id="dl_ba48e3c560b842059664";
export const url=new URL("../icons/T/threads-logo-thin.svg?v=b7277678c159dd7ac073e73226cbe0d53427a7c66e87b3a1a9872c1090625564",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
