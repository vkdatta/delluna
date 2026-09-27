export const name="arrows-out-line-vertical";
export const id="dl_fc5edc2c16354f499098";
export const url=new URL("../icons/arrows-out-line-vertical.svg?v=145d31d9210bc67805be45479d2d394c26f8b4fe34836d78c95be7fbc1305b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
