export const name="local_parking-fill";
export const id="dl_639692a02ff8868d5453";
export const url=new URL("../icons/local_parking-fill.svg?v=b42cd948b959514d53aac545434be48fcf8e8fc6212ea7d045b529de9721ced8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
