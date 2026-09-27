export const name="greater-than-fill";
export const id="dl_09b1365433c9459faaef";
export const url=new URL("../icons/greater-than-fill.svg?v=129d17644b02b43ff44e48c84ea6919594a4250f7df4a329f8ac5862aeef3685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
