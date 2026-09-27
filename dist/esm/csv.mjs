export const name="csv";
export const id="dl_bdb43f05271e9fba25bc";
export const url=new URL("../icons/csv.svg?v=59a6c78133052363d80694299fc3bfab1fb74bcb08d7f2afaece6ab067cca95a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
