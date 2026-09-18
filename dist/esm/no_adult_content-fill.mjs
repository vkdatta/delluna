export const name="no_adult_content-fill";
export const id="dl_f5e8bb5008444ee4bd02";
export const url=new URL("../icons/no_adult_content-fill.svg?v=5519de13abb244fd1493a8fe075dffc3304aa7b8cafc7f7b6ea9f361bf4447b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
