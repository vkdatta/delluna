export const name="read-cv-logo-bold";
export const id="dl_bad318bb5fe248559d86";
export const url=new URL("../icons/read-cv-logo-bold.svg?v=ff586c91379ab5e7349f1501c9c6a657106e2c18937b7ec1ee08727db12863ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
