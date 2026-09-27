export const name="file-md-fill";
export const id="dl_7308cc0789dc42a899f2";
export const url=new URL("../icons/file-md-fill.svg?v=ba849801db01b02c4801c243178cf6c8bd2e8909056b8248d2307b5803a554b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
