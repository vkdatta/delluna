export const name="tv_remote";
export const id="dl_3518207b0d7e97b45294";
export const url=new URL("../icons/tv_remote.svg?v=575ffbc5a29dae924f641625cfa16d623b7f48e9e961765c9ed6194393ee66cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
