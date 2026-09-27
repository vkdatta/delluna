export const name="book-open";
export const id="dl_351bba19e1eb4e6e8389";
export const url=new URL("../icons/book-open.svg?v=3d736f585ca54ac50163cf369d54605bd65d3b058b2670e95e1b28f59eaeb100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
