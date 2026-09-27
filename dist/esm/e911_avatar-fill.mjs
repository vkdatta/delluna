export const name="e911_avatar-fill";
export const id="dl_43e0182194e9119b8902";
export const url=new URL("../icons/e911_avatar-fill.svg?v=b048f4e1172c0fd9a63d94467d278c1d55530b88ff1e63f6437810c30042c76a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
