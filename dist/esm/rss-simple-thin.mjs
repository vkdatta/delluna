export const name="rss-simple-thin";
export const id="dl_36387a47970c449a80d0";
export const url=new URL("../icons/rss-simple-thin.svg?v=ebd3bca53bbb6fce4e286cee1e1e55919aea142dfd61d60009a2110d30874026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
