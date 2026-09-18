export const name="stylus_pencil-fill";
export const id="dl_1dcbde593ffe4d1bbd7f";
export const url=new URL("../icons/stylus_pencil-fill.svg?v=1293c577bc0eb3799396fc0d09db32b8a926dad2961598fdd3daa767e6ec1c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
