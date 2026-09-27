export const name="hourglass-simple-medium";
export const id="dl_48ac093d32564530b0d3";
export const url=new URL("../icons/hourglass-simple-medium.svg?v=eeffd4d672ffb39805aee29453c5a95f0198b1ce0d9d6084aad48b4e0838e49b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
