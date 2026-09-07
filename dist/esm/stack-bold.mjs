export const name="stack-bold";
export const id="dl_0c713f57efef42338d21";
export const url=new URL("../icons/S/stack-bold.svg?v=37b696df1b465b89a6a6da07d85011f52c59afd0d07e4e4d02d360f135e52099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
