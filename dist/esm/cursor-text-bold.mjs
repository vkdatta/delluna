export const name="cursor-text-bold";
export const id="dl_41975ea073f043918bad";
export const url=new URL("../icons/cursor-text-bold.svg?v=861d18119224d408caff09d70a104c4f7ffcf0808e3e7b350740acd06b7a2e76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
