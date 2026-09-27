export const name="arrow-fat-lines-left-light";
export const id="dl_91e85ace376842f896c6";
export const url=new URL("../icons/arrow-fat-lines-left-light.svg?v=b8a4474974e5ff8457067c64806b7b7a3a71be1f06e7e066e72a92e78e7cfb86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
