export const name="diagonal_line-fill";
export const id="dl_3862371d8dcc66f6ac75";
export const url=new URL("../icons/diagonal_line-fill.svg?v=b70aedb8cad1828132d6ae3b57ba9c4b9a4633c126e375ceb65100ec1e6a8680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
