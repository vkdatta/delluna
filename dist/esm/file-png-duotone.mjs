export const name="file-png-duotone";
export const id="dl_c31311e3082c4a87853b";
export const url=new URL("../icons/file-png-duotone.svg?v=5ac67bf9587fca0e81538039fff73068a1e2b03df1bfb9d345f8beffd4fc102b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
