export const name="unlink";
export const id="dl_c8c37666da3c44e3919f";
export const url=new URL("../icons/unlink.svg?v=a524fa03e3921348cf3ba349375ce2741d288a06188f4be0b4658c73f79391ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
