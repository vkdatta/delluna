export const name="folder-simple-thin";
export const id="dl_0193871c846a44bdbac2";
export const url=new URL("../icons/folder-simple-thin.svg?v=f5df45569756ddb73a777454f1b9fd19b8571ce01f55f274d5f4e9a3ce1e07b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
