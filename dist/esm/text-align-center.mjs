export const name="text-align-center";
export const id="dl_1c0f0d09c8b645f4aa0c";
export const url=new URL("../icons/text-align-center.svg?v=fb64f0d0c503cfd68ef5f02f7822afc7e7741c1f3059ff1910c922fbe8eaeba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
