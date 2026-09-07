export const name="person-simple-tai-chi-thin";
export const id="dl_db9d9a3313b043d8ae6e";
export const url=new URL("../icons/person-simple-tai-chi-thin.svg?v=c8b561a42fc41fb8e2273d7fb328ec21db5aa78cfcb6614398814857ae802df2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
