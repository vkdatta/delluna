export const name="motorcycle-bold";
export const id="dl_86931d9be8ad4869b68c";
export const url=new URL("../icons/motorcycle-bold.svg?v=ab74a38ae98e3f12beafbd07100611a6148b4cb10388205e80f238e41bbb91d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
