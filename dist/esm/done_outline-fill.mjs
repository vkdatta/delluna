export const name="done_outline-fill";
export const id="dl_3f4e2b17c33f0583d822";
export const url=new URL("../icons/done_outline-fill.svg?v=8054362f2cccd6a7ebfe4f38225e6698f094f841f6acf1e6bf719869a18dc974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
