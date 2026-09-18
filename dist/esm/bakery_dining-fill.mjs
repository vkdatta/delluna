export const name="bakery_dining-fill";
export const id="dl_ad4e869cb09749e19fb9";
export const url=new URL("../icons/bakery_dining-fill.svg?v=d5f4a26ca3ff55356542e4c340c1f70aaa41fc9cadeb7ff8ec66ffa7655ed3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
