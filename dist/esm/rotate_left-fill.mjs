export const name="rotate_left-fill";
export const id="dl_7785add6ccb3c29455ea";
export const url=new URL("../icons/rotate_left-fill.svg?v=cd27c5175578bdad3db41473d737d6c9ae3ac4c9e6db8956b95b56a071329b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
