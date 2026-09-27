export const name="gender-transgender-light";
export const id="dl_cd27d8ec280a43328626";
export const url=new URL("../icons/gender-transgender-light.svg?v=78c52c63664735b2a682c7536e640d0324d2198b41ca4ab53eba765cfcfc52f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
