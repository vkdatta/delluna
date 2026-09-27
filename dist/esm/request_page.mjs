export const name="request_page";
export const id="dl_dfb878ecd46d871d065c";
export const url=new URL("../icons/request_page.svg?v=5b9b06bfb382b10257cd8002641eda3785231541571eb3b26f022b5726d3f06e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
