export const name="google-chrome-logo-light";
export const id="dl_954f41f21d7d4828bb37";
export const url=new URL("../icons/google-chrome-logo-light.svg?v=9093390fb6945fd8be73ab3629fb873e71a9ed0391295439b822e63ed15f106b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
