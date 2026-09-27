export const name="no_drinks";
export const id="dl_d1bc9b58bdef30a79a63";
export const url=new URL("../icons/no_drinks.svg?v=46dfd71591e95509f9611c31572d4c8162e797bd89b65e8ce8c9ad258c21e444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
