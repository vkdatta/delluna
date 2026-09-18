export const name="text_snippet-fill";
export const id="dl_079eefee04cc4d42b82e";
export const url=new URL("../icons/T/text_snippet-fill.svg?v=7bb3315f9dfceb91eb9742f36f960b01887b8c8dd8595368deb19c617dcf48cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
