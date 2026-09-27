export const name="align_space_around";
export const id="dl_bec0c3404fad5a648d94";
export const url=new URL("../icons/align_space_around.svg?v=082ff0f7f94ead833225e8aa5ae70349f1232116bc019d52021858dd68de9d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
