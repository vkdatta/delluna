export const name="lucid_1-beer-off";
export const id="dl_28e10f9ef4f74d0791cc";
export const url=new URL("../icons/lucid_1-beer-off.svg?v=cdfae5f164e45306b95f3bb2881fbd3de523f26f1b730495463a78f3faa08b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
