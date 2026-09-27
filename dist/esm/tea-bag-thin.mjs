export const name="tea-bag-thin";
export const id="dl_6d7c25060010ad02314a";
export const url=new URL("../icons/tea-bag-thin.svg?v=302c2eca2b28b8b4136507cba1c73cc95c18bb42ae9e6b2a6b6ec2f4decc4e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
