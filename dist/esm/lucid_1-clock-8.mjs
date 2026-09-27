export const name="lucid_1-clock-8";
export const id="dl_824c5146837c4a228c9c";
export const url=new URL("../icons/lucid_1-clock-8.svg?v=c5bc5d0c6f0e4ebcf5b3c4bc1ab84bc9f6de1e12367531bd749198db8179e1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
