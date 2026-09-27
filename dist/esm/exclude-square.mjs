export const name="exclude-square";
export const id="dl_952e31d746ee4515bfd1";
export const url=new URL("../icons/exclude-square.svg?v=39a9e926371f33218bf32248a950e450481f34ffb3f60f19f2ae978d4ac625a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
