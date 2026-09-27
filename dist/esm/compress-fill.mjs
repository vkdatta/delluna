export const name="compress-fill";
export const id="dl_eaeb368ff764aa7df9e6";
export const url=new URL("../icons/compress-fill.svg?v=a6db27aa8a698be61855958d7081a8ec351dc9333c0ca98178e28368e659ba38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
