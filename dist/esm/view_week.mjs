export const name="view_week";
export const id="dl_6350296550263b588e7b";
export const url=new URL("../icons/view_week.svg?v=20715499db99485ca04210dd229216855076e245763e4c46497094806e4721aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
