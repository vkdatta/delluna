export const name="hiking-fill";
export const id="dl_65b6905212ada1889bb9";
export const url=new URL("../icons/hiking-fill.svg?v=9887a53cd6b1c17abf23237e8e317e9f8b3d28049c988b4fb09f2dbe9d061242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
