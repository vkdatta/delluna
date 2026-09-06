export const name="flag-pennant-bold";
export const id="dl_dd34f8c7ad3549858156";
export const url=new URL("../icons/flag-pennant-bold.svg?v=36913953177a5df295ffdc3c16796e61fcf9e9f92ef70126b6fb23ede73b4501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
