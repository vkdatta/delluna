export const name="egg-crack-fill";
export const id="dl_706311dda4b0424caf07";
export const url=new URL("../icons/egg-crack-fill.svg?v=c1aa13b3da3a66c7bda65beb6485f60cc0c422ca9baa3f40558a0a0773ed9ef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
