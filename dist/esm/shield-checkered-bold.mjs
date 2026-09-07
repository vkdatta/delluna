export const name="shield-checkered-bold";
export const id="dl_fbd26a9326ef42e8be27";
export const url=new URL("../icons/S/shield-checkered-bold.svg?v=7c975c57e7122a4ca40438a00a938d5bca75a5a482da0fba3ad765c815ef0a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
