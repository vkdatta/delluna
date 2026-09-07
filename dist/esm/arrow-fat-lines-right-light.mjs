export const name="arrow-fat-lines-right-light";
export const id="dl_0760a790c34648599f74";
export const url=new URL("../icons/arrow-fat-lines-right-light.svg?v=93ce6ae1ab353bc165b54552cc5602565501e7c10261f1b225612f8d33b50e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
