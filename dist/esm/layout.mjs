export const name="layout";
export const id="dl_562136fbbc1b4a229a80";
export const url=new URL("../icons/layout.svg?v=7436c160d3f420240b3efa5b2c156ee7e8ca850222b2f98d26c50418b1921b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
