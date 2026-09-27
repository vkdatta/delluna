export const name="codepen-logo-fill";
export const id="dl_f9555d8e5ff142a9823d";
export const url=new URL("../icons/codepen-logo-fill.svg?v=c77f82b218e0f65f630af4c239cec8a0be002f88fd882699ba6c19acf089445d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
