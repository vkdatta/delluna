export const name="smiley-x-eyes-light";
export const id="dl_24f406498c8b4e28a9e6";
export const url=new URL("../icons/smiley-x-eyes-light.svg?v=a51af818ea0fe5779cebeb04036362a0369e04bb793ff62e976336716c01045c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
