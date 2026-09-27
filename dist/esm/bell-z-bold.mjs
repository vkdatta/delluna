export const name="bell-z-bold";
export const id="dl_25afe6de854047b88419";
export const url=new URL("../icons/bell-z-bold.svg?v=098cdee0294dde4b57b4ff7ffa770d19f006a9d5f200d3a4bc1b1ccec412a50c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
