export const name="snowing";
export const id="dl_3dbea60f7d7b7f6019be";
export const url=new URL("../icons/snowing.svg?v=2aa3c8caca4d6a67c094d68cb1135886dc71328779b65aeed3ac72e07c5179a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
