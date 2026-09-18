export const name="wb_twilight-fill";
export const id="dl_21031d9afe6144d387c2";
export const url=new URL("../icons/wb_twilight-fill.svg?v=b76b53d5c7596348414844c32897f0c80ba4b04eecc7aa71b35a543bbce815b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
