export const name="stress_management";
export const id="dl_123fef72b2534fc38af1";
export const url=new URL("../icons/stress_management.svg?v=e741ec4f088fdcbfdcaf599983715f2447c9f307156934942402a3cc03729d79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
