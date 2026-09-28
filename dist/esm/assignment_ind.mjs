export const name="assignment_ind";
export const id="dl_109fc5fce6c711f529b4";
export const url=new URL("../icons/assignment_ind.svg?v=83564a565096f25d70d8f8409d2becbf24a99f1e4c921b7f295a38c5f43f49c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
