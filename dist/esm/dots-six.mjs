export const name="dots-six";
export const id="dl_f85631cec26d452bbe75";
export const url=new URL("../icons/dots-six.svg?v=f87b60650a228158bbf7d5b0b7839613b2fe363452e221989640dab8fce62b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
