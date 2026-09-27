export const name="folder_code";
export const id="dl_38b07f1d4dc0cecbde57";
export const url=new URL("../icons/folder_code.svg?v=9e1bf6f8089c666ef96a0d32b5e6ee1f774dc0de2235bc7ecf60c2eef4383e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
