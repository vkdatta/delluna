export const name="password-duotone";
export const id="dl_ab06c393fcc2421380e4";
export const url=new URL("../icons/password-duotone.svg?v=e7672dc6a53e441bd5683897f93a4cc0ddfb3e3b63df31a586d7c5f86ffb9e9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
