export const name="local_library";
export const id="dl_21097b5b5ceb9da66c2f";
export const url=new URL("../icons/local_library.svg?v=48f493d98e89209f01bdb702601154ab4fe8c36357015eebe2017d370d8cb2b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
