export const name="inbox_text_asterisk";
export const id="dl_c8f84c192d980eb730a6";
export const url=new URL("../icons/inbox_text_asterisk.svg?v=0d66fad9716d6cd6c386f780dab279a4836f2dca7b399d3d2c6830f3e9af8f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
