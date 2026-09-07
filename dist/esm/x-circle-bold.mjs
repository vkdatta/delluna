export const name="x-circle-bold";
export const id="dl_4eb3af58c4a641c69770";
export const url=new URL("../icons/X/x-circle-bold.svg?v=c2e88b5a115034e324ff72bcca8eb758a05001cfb528ed4251723dacb1d4e59c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
