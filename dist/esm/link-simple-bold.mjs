export const name="link-simple-bold";
export const id="dl_43814c2474824f589f56";
export const url=new URL("../icons/link-simple-bold.svg?v=b645ee8eb7e17ebaf35f5bf3373d3904df446186d77af805ec6c037929c06aab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
