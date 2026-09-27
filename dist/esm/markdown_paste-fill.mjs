export const name="markdown_paste-fill";
export const id="dl_ef32f7040e59d38f406a";
export const url=new URL("../icons/markdown_paste-fill.svg?v=5e531c1b7554232a9c3141c596dc0b14c2ac2002ae928994b51f7cb9012fb67b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
