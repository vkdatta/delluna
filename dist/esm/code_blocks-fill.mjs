export const name="code_blocks-fill";
export const id="dl_132bbf344001481b8d0b";
export const url=new URL("../icons/code_blocks-fill.svg?v=d0a71bcf4e8209422fb2796e9a0779ad41ed312de8e375cf5b5904ebaebc3aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
