export const name="content_copy";
export const id="dl_01b403da52065983eca6";
export const url=new URL("../icons/content_copy.svg?v=251d49a3f28320873df811a00c36f5b093de86b598a60c5ce9a151aa4ae0a005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
