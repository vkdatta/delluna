export const name="book-open-user-bold";
export const id="dl_12e3803f162242fc9329";
export const url=new URL("../icons/book-open-user-bold.svg?v=e26610a5ff70e4c9fcd0251fe09f6eb52d2aad90a6f12a7f4909d392bbc99ee7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
