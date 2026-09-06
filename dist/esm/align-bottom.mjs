export const name="align-bottom";
export const id="dl_6b52be5b13244d0489cd";
export const url=new URL("../icons/align-bottom.svg?v=6f0032f4994aaa5d931c535da216a2031819351537b39c65f718c9482616914d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
