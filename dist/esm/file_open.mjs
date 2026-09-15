export const name="file_open";
export const id="dl_e6357e531c8c403e80a7";
export const url=new URL("../icons/F/file_open.svg?v=3ee38096bbb68a749783895bdca90d59f6d032f2589fb9c4a4d3ab978ac67250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
