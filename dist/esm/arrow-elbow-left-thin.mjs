export const name="arrow-elbow-left-thin";
export const id="dl_f1ec34a800b3467eb001";
export const url=new URL("../icons/arrow-elbow-left-thin.svg?v=9ea34321dc2476fbda4a1fe613cb6089fd479ffe43d151e3c23d733ae25b1943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
