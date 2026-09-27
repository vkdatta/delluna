export const name="mic";
export const id="dl_74a90d1c8d0e7982d190";
export const url=new URL("../icons/mic.svg?v=d01416e3ac8b8258e748f8a4c4c45caeb3e67947486f53179033177dc867edd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
