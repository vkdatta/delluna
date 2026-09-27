export const name="arrow-clockwise-duotone";
export const id="dl_2d0c972adb7d4a4296f5";
export const url=new URL("../icons/arrow-clockwise-duotone.svg?v=5a3563e9c7df80f429cc5d20f2afae9d5c5658b9ccdc7ae507742497745aa172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
