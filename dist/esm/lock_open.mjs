export const name="lock_open";
export const id="dl_5e48e8b2b2eb6c79d423";
export const url=new URL("../icons/lock_open.svg?v=1788952099fd1978d91743855d4477b50aeea4ce605bd0035fa74f409a797666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
