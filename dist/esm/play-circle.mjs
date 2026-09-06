export const name="play-circle";
export const id="dl_016a689bfb634eb0b14e";
export const url=new URL("../icons/play-circle.svg?v=378c08eea12bc0dc63ee7914bcfe8b9764716abb7f760fe044c90381a3e9c3c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
