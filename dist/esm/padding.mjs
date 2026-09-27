export const name="padding";
export const id="dl_00eacaf3111c7a93ee6d";
export const url=new URL("../icons/padding.svg?v=d1b7b475f2b8d4871f6113c981b03675a21aee7cfe3800ad7ff2bf932322210b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
