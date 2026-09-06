export const name="lucid_3-panel-right-close";
export const id="dl_6d5da7e59b8141a98cf6";
export const url=new URL("../icons/lucid_3-panel-right-close.svg?v=21301f49e4668d93892a34cd1840257afe10c2b0266b02d10bef9fb493bd6e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
