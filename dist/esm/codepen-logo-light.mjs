export const name="codepen-logo-light";
export const id="dl_cd11a043b38c472292b6";
export const url=new URL("../icons/codepen-logo-light.svg?v=9c6a03002e41a1502e3e212e92a3e869b68f69905a657ec2c1f62c1b1832f99a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
