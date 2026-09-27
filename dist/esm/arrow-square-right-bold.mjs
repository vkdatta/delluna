export const name="arrow-square-right-bold";
export const id="dl_815e066e948f4fab9750";
export const url=new URL("../icons/arrow-square-right-bold.svg?v=f68975b7875badf2b3002b933c6f9fe5913b3b154aa105a441006fb5fabbbd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
