export const name="mobile_3-fill";
export const id="dl_ff9566461d6a371709fa";
export const url=new URL("../icons/mobile_3-fill.svg?v=fcd173d843d69f1901b4f8046e31fa7bd5d483bdab9ddb74958d756a32794880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
