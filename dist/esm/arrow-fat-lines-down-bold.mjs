export const name="arrow-fat-lines-down-bold";
export const id="dl_fd490ae0349a4b5b8c3b";
export const url=new URL("../icons/arrow-fat-lines-down-bold.svg?v=8a9fa512aedaf626ede668f5d26fb708d1fc22bc3cc1edc1a83b6abc7c13483e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
