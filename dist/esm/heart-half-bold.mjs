export const name="heart-half-bold";
export const id="dl_af84151d31c14ced8765";
export const url=new URL("../icons/heart-half-bold.svg?v=cd8dbd76b18f534dc6ebc73a1a3f9d4a100b8df940d792a1b5417d585cae9e62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
