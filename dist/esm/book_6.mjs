export const name="book_6";
export const id="dl_e995ea2958be4ec1bb8c";
export const url=new URL("../icons/book_6.svg?v=1b7987c5ed60ec5bf2623a0b87a83dec8290d9b63fa653bb38f2e26a2dd2d9bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
