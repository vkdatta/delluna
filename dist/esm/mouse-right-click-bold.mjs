export const name="mouse-right-click-bold";
export const id="dl_ec29e2578cce4eae8041";
export const url=new URL("../icons/mouse-right-click-bold.svg?v=bd1835c021a815c64366af0a14d3643c01fe884d19ee9052675c297ccec51df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
