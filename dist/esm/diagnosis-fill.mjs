export const name="diagnosis-fill";
export const id="dl_754673c22df2df9ad126";
export const url=new URL("../icons/diagnosis-fill.svg?v=fea50064d634029677e2347f7f65cb1b0e405ba0a8944355660105aaeb7ca3b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
