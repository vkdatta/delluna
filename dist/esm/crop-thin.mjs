export const name="crop-thin";
export const id="dl_104daecda46e4458bcc6";
export const url=new URL("../icons/crop-thin.svg?v=8fa6234696add79b6c1fa04fe53ae487baa6bf2b2bd4b50c98942d5a0092ff96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
