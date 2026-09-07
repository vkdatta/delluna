export const name="code-block-fill";
export const id="dl_03e12724a3314780ae2a";
export const url=new URL("../icons/code-block-fill.svg?v=71618f4722712cc2f9340d33963491a1256fb10f792ad5fa0c235beb97ebf9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
