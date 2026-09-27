export const name="number-two";
export const id="dl_7f9c38c9f78043768fee";
export const url=new URL("../icons/number-two.svg?v=ca8b797b437998391c406372918f6ca9f9d6b8392b7da21fda785375ab8f1357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
