export const name="eye-bold";
export const id="dl_095f51394d324875847f";
export const url=new URL("../icons/eye-bold.svg?v=2ad8a8c011d8378be3eee100872f0885aebfcba36ee7e81bd07d8f3facf3426c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
