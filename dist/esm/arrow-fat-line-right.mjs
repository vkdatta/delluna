export const name="arrow-fat-line-right";
export const id="dl_3fb804352b6a40d0aeed";
export const url=new URL("../icons/arrow-fat-line-right.svg?v=10adeb4b390cd6563721fec4f7db8899e5fe96ff1be4979565a624682aeae5e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
