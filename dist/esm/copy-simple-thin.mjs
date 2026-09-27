export const name="copy-simple-thin";
export const id="dl_4caf78b19d184cf9bfab";
export const url=new URL("../icons/copy-simple-thin.svg?v=ebdb3dd1507643a77000f46c8d7347b2fc8bf4e3b2b7d5a5482034369f54f30c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
