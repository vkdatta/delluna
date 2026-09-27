export const name="globe-hemisphere-east-bold";
export const id="dl_42fa77dd113d42c4b768";
export const url=new URL("../icons/globe-hemisphere-east-bold.svg?v=c0db9d0dc31f243def1a6651e38c45aab764a04918e783df006428aed5dfd69a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
