export const name="garage_home";
export const id="dl_156eb12559bb2390d106";
export const url=new URL("../icons/garage_home.svg?v=0a449b2fa159d14061927bd5aaa50d4930ef5dc7e3ca97dc4633ab267849df72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
