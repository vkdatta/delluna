export const name="text-h-three";
export const id="dl_4333d2e79c40d3b64395";
export const url=new URL("../icons/text-h-three.svg?v=0ffe1c2dfa7299c557964ede128317a1dac9aec913ac9281fc9ae1642fd12221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
