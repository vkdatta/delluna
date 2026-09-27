export const name="align-top-simple-duotone";
export const id="dl_8f8f042a00a8496aa83c";
export const url=new URL("../icons/align-top-simple-duotone.svg?v=6a59b3502b2067e16212f5a2d1011ace127717450ecf35ab74c1106efdfc5b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
