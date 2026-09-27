export const name="lucid_1-arrow-big-left";
export const id="dl_b0cbcdcc1f6447e6a26c";
export const url=new URL("../icons/lucid_1-arrow-big-left.svg?v=e0413baba7498933b129344f0096cd6f9d91a000678eb93a9f7a21ee297450a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
