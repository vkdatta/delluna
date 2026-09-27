export const name="arrow-line-up-right-fill";
export const id="dl_5dea0e8a7f0c471cbb75";
export const url=new URL("../icons/arrow-line-up-right-fill.svg?v=f231ff0f2e151d58adf140d02156cf6fefd51a39d19f487db3ae88e7e68d4764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
