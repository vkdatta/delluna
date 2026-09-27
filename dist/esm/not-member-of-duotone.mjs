export const name="not-member-of-duotone";
export const id="dl_1943dc2e8ac54fbbbb3f";
export const url=new URL("../icons/not-member-of-duotone.svg?v=de2ee303791accf866877e53980fea6a404e2b18b51011548d75eacf759f4bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
