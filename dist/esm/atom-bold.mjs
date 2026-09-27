export const name="atom-bold";
export const id="dl_70ebc245e0d54ed396ea";
export const url=new URL("../icons/atom-bold.svg?v=69f56e2b39a345d036c18f8147cacd59fb07db76672e4ccc4e3cf7f7bef678d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
