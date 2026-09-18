export const name="inbox_text_asterisk";
export const id="dl_6f04afeb48b7472db133";
export const url=new URL("../icons/I/inbox_text_asterisk.svg?v=48b4eff9a0d0080e604e00b41433bb91fa293dbbc9038687c53f907ee4e82c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
