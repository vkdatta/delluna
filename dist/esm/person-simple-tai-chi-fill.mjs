export const name="person-simple-tai-chi-fill";
export const id="dl_0a867ae8365347f88010";
export const url=new URL("../icons/person-simple-tai-chi-fill.svg?v=c89898d08d28f1222bdbb15f47cfd0d1ec42453b79662ad61b2de45f4cae8cde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
