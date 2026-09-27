export const name="student-thin";
export const id="dl_b4378299edb457ccf5a2";
export const url=new URL("../icons/student-thin.svg?v=9dc796c8a973c936d1b6e9459ce4546f40054f415dfccc999016ce5415492a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
