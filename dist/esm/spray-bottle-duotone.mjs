export const name="spray-bottle-duotone";
export const id="dl_b5b77326e76f6ea3e7d3";
export const url=new URL("../icons/spray-bottle-duotone.svg?v=7676c52b83113d50c2b6d3924fbaa3b5e92bd0278374e4aa08ef5fce7cc6d3f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
