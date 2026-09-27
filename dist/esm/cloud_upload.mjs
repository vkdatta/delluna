export const name="cloud_upload";
export const id="dl_5673ca481d5b5ecba804";
export const url=new URL("../icons/cloud_upload.svg?v=f90db9be68ccb4fa4e64b2dd7af181391a3234b94e71c0b69076b39cf41d333f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
