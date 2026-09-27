export const name="trail_length_medium";
export const id="dl_fa05e7f8988486287fb1";
export const url=new URL("../icons/trail_length_medium.svg?v=e3c7bacd766bddeb906bbcdb6b1d24d8c34163fd177ce4296b3262818e30fdbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
