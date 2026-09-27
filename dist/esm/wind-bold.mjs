export const name="wind-bold";
export const id="dl_8ee240ded77cd9cef663";
export const url=new URL("../icons/wind-bold.svg?v=e4bb5cdb71a1e5ee7a24e5bdea138dd4a50302cc7e57e89ec3f9ef2810dbef43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
