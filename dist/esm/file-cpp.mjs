export const name="file-cpp";
export const id="dl_a195332a4ccb42d9bb3f";
export const url=new URL("../icons/file-cpp.svg?v=aeac99b10d2e83781e928d62f2709ce3cf059a5aa2957ac26568af8f3ab42939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
