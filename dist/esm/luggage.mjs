export const name="luggage";
export const id="dl_38a479ff4509f67b7c57";
export const url=new URL("../icons/luggage.svg?v=8471ee7ab47e9bbb5e4763938ba0385f76d033d838694c3d51a150004df0f175",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
