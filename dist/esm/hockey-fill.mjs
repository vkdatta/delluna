export const name="hockey-fill";
export const id="dl_c327420352a440e7ae89";
export const url=new URL("../icons/hockey-fill.svg?v=fceda3777d79b357c2296e58b098d64d08e2d51b8d8c01cee1d706779e37629d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
