export const name="tv_remote-fill";
export const id="dl_081cccef10f47cdee8eb";
export const url=new URL("../icons/tv_remote-fill.svg?v=227ce1989b18c0410fbe5797278c2f348f8dee3659123ae00d3d69d4d9f03a77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
