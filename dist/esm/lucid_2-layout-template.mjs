export const name="lucid_2-layout-template";
export const id="dl_a402c8cd3fc84707a916";
export const url=new URL("../icons/lucid_2-layout-template.svg?v=4f1ff24b9c7f14e60bbfba67f8ccee4b93832a1049f8a1821298deea1138ba0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
