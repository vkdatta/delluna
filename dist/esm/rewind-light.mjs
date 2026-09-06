export const name="rewind-light";
export const id="dl_d1a0fde959c8441898e6";
export const url=new URL("../icons/rewind-light.svg?v=403a7f2643c9ce93bb3934a0c02ca601029d45bf89318495b11c6d2b2770abe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
