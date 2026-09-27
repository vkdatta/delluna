export const name="vacuum-fill";
export const id="dl_fd2f703c220f0c89eb07";
export const url=new URL("../icons/vacuum-fill.svg?v=38eb18183557a6ce988ee6dfc57c7728c77d58ed4e97c31056ba641457e19643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
