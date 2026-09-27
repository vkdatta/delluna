export const name="watch-light";
export const id="dl_ed1619ea603a415f3042";
export const url=new URL("../icons/watch-light.svg?v=db6431a987e29b0c457fc1d5270fd749f2bd2cc79391ca57f9ddc070d92250b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
