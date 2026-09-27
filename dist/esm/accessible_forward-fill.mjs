export const name="accessible_forward-fill";
export const id="dl_1fd2cff745dbb205638b";
export const url=new URL("../icons/accessible_forward-fill.svg?v=838b3cfac57f74f5614d1e119156973d49365465150dddee7f877f71876a79eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
