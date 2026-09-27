export const name="news";
export const id="dl_97bc85bd3baa5c3ea84c";
export const url=new URL("../icons/news.svg?v=2c0375a7a9f21550f9a2628f5b96c2bd1ba73995afea5123acb2492097314179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
