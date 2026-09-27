export const name="reviews";
export const id="dl_fd6b78facd03613148b1";
export const url=new URL("../icons/reviews.svg?v=f6f2ef5383c5ce43df741e5bf2c7cb61456c03bd04e6bd68929dcf491ee63843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
