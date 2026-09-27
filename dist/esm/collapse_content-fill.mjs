export const name="collapse_content-fill";
export const id="dl_8084f1b2801deaa734a3";
export const url=new URL("../icons/collapse_content-fill.svg?v=f01f12ec6a658b7dd654a88a7e988e5cac3fec014abb631fcff86c2be467922d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
