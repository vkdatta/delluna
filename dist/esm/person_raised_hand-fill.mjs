export const name="person_raised_hand-fill";
export const id="dl_e1949b8ef7ebd74890b2";
export const url=new URL("../icons/person_raised_hand-fill.svg?v=9daf9fcbb132f520d0c3f3968a7ea67798751379af76be0cbd0b06027419ad78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
