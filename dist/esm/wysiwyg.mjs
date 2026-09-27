export const name="wysiwyg";
export const id="dl_2d353c68292c63086e3c";
export const url=new URL("../icons/wysiwyg.svg?v=6e097ccdbf1ade64e5d10431c77b7dac9ed949f639bd772359729182b48edda0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
