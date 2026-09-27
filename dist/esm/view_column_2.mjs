export const name="view_column_2";
export const id="dl_e7fca9bde3ec4f88c220";
export const url=new URL("../icons/view_column_2.svg?v=38560b7c0368be6c4a30c21d900bb89ad618ccffd41a966e7cd5a1ffeef3bcba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
