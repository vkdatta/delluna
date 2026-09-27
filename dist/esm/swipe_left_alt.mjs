export const name="swipe_left_alt";
export const id="dl_88035b5af43f68d4da3c";
export const url=new URL("../icons/swipe_left_alt.svg?v=fc074c413de6938bb42733263da70e6cb0f96171400cfa6ab30179ec133fc57c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
