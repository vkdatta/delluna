export const name="text-h-four-thin";
export const id="dl_99028befc35068cc9ddf";
export const url=new URL("../icons/text-h-four-thin.svg?v=ca10625ced542da59496da71b814bfa612cb564c7fbcfab976c5565e317985b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
