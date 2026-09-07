export const name="file-css-duotone";
export const id="dl_b42ea5fabbd7407ba40e";
export const url=new URL("../icons/file-css-duotone.svg?v=195a23c468508d508dac93d212bbb48179f0c33ddf8c60eaeeb0a380f2b41c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
