export const name="aperture-bold";
export const id="dl_7ad023ab0abc47f2b8be";
export const url=new URL("../icons/aperture-bold.svg?v=5612a6fe6db44710c872c2db5e35b204475d770c5e6fd1ff8c4ac9e56f9a6e99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
