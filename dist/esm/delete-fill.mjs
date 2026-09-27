export const name="delete-fill";
export const id="dl_823c898c7ccda2f5b7e8";
export const url=new URL("../icons/delete-fill.svg?v=6e5d7f196b42c5fb7b2b4110575073cc9891b39edc4b6e83340150bda3b84762",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
