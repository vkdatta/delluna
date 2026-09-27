export const name="content_paste_go";
export const id="dl_b18238bba94e8b273584";
export const url=new URL("../icons/content_paste_go.svg?v=629d40c85679f8cbbd6ce74fcd80362816302345c68dd527ccbe2bfdd8f4bb22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
