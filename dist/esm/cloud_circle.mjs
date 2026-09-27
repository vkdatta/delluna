export const name="cloud_circle";
export const id="dl_cdd4f1893acee4143e9c";
export const url=new URL("../icons/cloud_circle.svg?v=71477cab9485311a0abcbe3651be0ce47c14350df240c96d5e457ae261f5700a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
