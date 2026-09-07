export const name="trash-simple-light";
export const id="dl_f782462113dc4975b417";
export const url=new URL("../icons/T/trash-simple-light.svg?v=fbd3f5124e4ca9caccaa8a43f4621af7a61c5b37d5c8bb3657861c58cd7cd815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
