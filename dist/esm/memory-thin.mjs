export const name="memory-thin";
export const id="dl_c2c8334434634e71a958";
export const url=new URL("../icons/memory-thin.svg?v=f2da82a1b200c0dcdf457e91bf2ddb9b0eedc20b8afef79c9346d1da677ac4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
