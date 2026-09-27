export const name="funnel-x-fill";
export const id="dl_e82e173a45b34f7f9b07";
export const url=new URL("../icons/funnel-x-fill.svg?v=b93ebb63f405332ca7966137defcf1984e173006c7432d29b74d244bdc508267",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
