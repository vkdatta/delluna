export const name="blur_circular";
export const id="dl_e944b46a5acb2556173b";
export const url=new URL("../icons/blur_circular.svg?v=f5623051855853beee3e830225a2e9bdbc3bf3bd06dc8911ffebaa381263790a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
