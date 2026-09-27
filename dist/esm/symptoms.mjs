export const name="symptoms";
export const id="dl_f83a3515bd7eb345dfb8";
export const url=new URL("../icons/symptoms.svg?v=bc546a2dc0c09f4e4b7ceb1b1df23c7559a9ee62ca98580e6dbd7fd2daf1f212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
