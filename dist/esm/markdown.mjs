export const name="markdown";
export const id="dl_934631ee98e50f2d068d";
export const url=new URL("../icons/markdown.svg?v=74e7ad8f6842ceff9678df4bed042c0b22adb5f63854207be67051a1ba2b2314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
