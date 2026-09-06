export const name="lucid_3-square-code";
export const id="dl_8df681bbd56b40b783d5";
export const url=new URL("../icons/lucid_3-square-code.svg?v=4a66b9825e54c18ed334d47c2e1c3fc69b165153baf5e6e774c3bb923741b6cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
