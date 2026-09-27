export const name="tv_remote";
export const id="dl_417f0965d35755ca6225";
export const url=new URL("../icons/tv_remote.svg?v=180224016a1471c580a1c2071e2a3939be5ab452e4596c405c3c6dd2db7667fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
