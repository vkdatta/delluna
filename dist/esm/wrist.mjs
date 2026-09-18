export const name="wrist";
export const id="dl_4129948d928b46fd8927";
export const url=new URL("../icons/wrist.svg?v=6ec3e86d99f149618be13b3824244131607b581235e0ab474d808085e03c9d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
