export const name="pencil-slash-fill";
export const id="dl_2077a51c4b044a468f96";
export const url=new URL("../icons/pencil-slash-fill.svg?v=cf4a14166bb1520046df9a3410b2f83919d099c4f804deb5f447b9a32f5af3c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
