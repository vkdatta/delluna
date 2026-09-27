export const name="text-subscript";
export const id="dl_b37daa84ac883023e6ea";
export const url=new URL("../icons/text-subscript.svg?v=7f249361a179a554a1500cef55989aef5e0619113808f838d2f999a80ce5f7a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
