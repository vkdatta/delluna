export const name="align-center-horizontal-simple-fill";
export const id="dl_e4cef394f896487396b2";
export const url=new URL("../icons/align-center-horizontal-simple-fill.svg?v=ce77596f52b2bf7b1b19dca629ec999f366f67c344ec7ae160932f0b513813cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
