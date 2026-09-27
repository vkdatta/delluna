export const name="file_png";
export const id="dl_d097e4423f70d389834d";
export const url=new URL("../icons/file_png.svg?v=9f6fa07204132f48ed2848d9f30e804180a8c976537cbf346db87c0645be28d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
