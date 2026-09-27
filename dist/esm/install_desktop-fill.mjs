export const name="install_desktop-fill";
export const id="dl_edcfe83b9df762b4b44e";
export const url=new URL("../icons/install_desktop-fill.svg?v=f7d2b176638e6a17805b5d8fe401a9ae81e95c3c96b08ecc622de6c389228f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
