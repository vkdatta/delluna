export const name="hash-straight-light";
export const id="dl_00b5500155e24f9bb5c6";
export const url=new URL("../icons/hash-straight-light.svg?v=6cf7c46afe828b3121af8750db245af60f0b695c7a32bf53b0e397ea3ade8f80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
