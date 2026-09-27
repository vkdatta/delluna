export const name="paint-brush-broad-bold";
export const id="dl_2e77d5027b7f43bcbdfa";
export const url=new URL("../icons/paint-brush-broad-bold.svg?v=8a7788aa4b027ffa8e41293b7e588156c7d0aaea7a4fbd4bbe1988eb4c7d5f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
