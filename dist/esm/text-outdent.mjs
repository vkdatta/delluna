export const name="text-outdent";
export const id="dl_a318d7ad8137e2defa71";
export const url=new URL("../icons/text-outdent.svg?v=0311d3c5cd107415c4fafaddaa92d37049fa5badadcecb231d79f5d3dcabd6d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
