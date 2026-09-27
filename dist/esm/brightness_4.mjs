export const name="brightness_4";
export const id="dl_9cef9d74d3664c43f912";
export const url=new URL("../icons/brightness_4.svg?v=4dbe91bdb4d52eb594a4dba55643d2c086b9db3772b1fbb24fd81b0ebc9c6090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
