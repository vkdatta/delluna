export const name="file-jpg-duotone";
export const id="dl_535eabb8f55040408da8";
export const url=new URL("../icons/file-jpg-duotone.svg?v=a5feac8fb74338a12b5b6fff3c2a376e15d5a67a471e9a16b8e59200155defe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
