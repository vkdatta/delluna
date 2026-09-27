export const name="link-simple-horizontal-break-light";
export const id="dl_a22a7bedc1bc4a6ba184";
export const url=new URL("../icons/link-simple-horizontal-break-light.svg?v=7cdeb30bdff1356022dd1c68a54fc4e07de6c39e982db9fecdb701813dae16a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
