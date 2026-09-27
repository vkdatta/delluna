export const name="tools_pliers_wire_stripper";
export const id="dl_d88b1119f90a8164222b";
export const url=new URL("../icons/tools_pliers_wire_stripper.svg?v=ae6e8737d10e6ccc709299e1de9be74edc9da871b84eb5846719d2a43061e0b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
