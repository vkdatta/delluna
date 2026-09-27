export const name="format_list_bulleted";
export const id="dl_8783f35ade830d420e5c";
export const url=new URL("../icons/format_list_bulleted.svg?v=36bc131c46bcc692b5c22c1af6cd42fd1eca84edfaf8fc339e243567e7743cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
