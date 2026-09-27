export const name="display_add";
export const id="dl_977584237f26289798f0";
export const url=new URL("../icons/display_add.svg?v=f69abe105f8d8654407d48bce21223e2dc070dba135db894765f53ebf54bb348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
