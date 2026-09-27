export const name="folder-star-light";
export const id="dl_b5c43f3677e1485f98b4";
export const url=new URL("../icons/folder-star-light.svg?v=0ff622835c87185dfff90fad4df2de20e698e42edf3bec07819db73365d37e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
