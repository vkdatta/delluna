export const name="lucid_1-book-alert";
export const id="dl_7ad09abb75204bf4b514";
export const url=new URL("../icons/lucid_1-book-alert.svg?v=33abe026ee5a4570c54503efa71645b17d86e692d58afc74e3240f93ff839443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
