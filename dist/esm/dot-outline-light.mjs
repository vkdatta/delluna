export const name="dot-outline-light";
export const id="dl_84db8e1ee157462486ea";
export const url=new URL("../icons/dot-outline-light.svg?v=b98dd7f7d8833005a03bc5fdf08a7f34c8fe388b33395b1c4a5adff1f6906291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
