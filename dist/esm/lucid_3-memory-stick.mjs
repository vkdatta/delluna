export const name="lucid_3-memory-stick";
export const id="dl_3a54b67eadfc4298928f";
export const url=new URL("../icons/lucid_3-memory-stick.svg?v=c5371853af08e60284b9d34f59110ff0eb02f49983f02ca66ec1676acee34a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
