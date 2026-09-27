export const name="checkbook";
export const id="dl_80246e4106f9673162c9";
export const url=new URL("../icons/checkbook.svg?v=235179f7aad0ed6ffab932587cab7b5a18c4cc1bd170556cfda1c4e8ec59ca81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
