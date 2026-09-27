export const name="mobile_dots";
export const id="dl_c4c3fd1f9952a86b442c";
export const url=new URL("../icons/mobile_dots.svg?v=174401b026693f0c3eeddd2f6cd9594731bcff266696c621340ac9ecfa519123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
