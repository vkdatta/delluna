export const name="arrows-vertical";
export const id="dl_b4d89d8c7b454eb3ae48";
export const url=new URL("../icons/arrows-vertical.svg?v=91e797f537d2a151a6e05d27b344412a2b2fbb30149388d6eeee1d76e60aee13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
