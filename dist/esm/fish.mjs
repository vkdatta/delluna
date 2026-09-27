export const name="fish";
export const id="dl_5eb4f657729642dca218";
export const url=new URL("../icons/fish.svg?v=9722bc079c34f1c98ec937a6a4c69126b5b6f10e3ce5a9bb18105e098806e726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
