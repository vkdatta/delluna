export const name="lucid_2-haze";
export const id="dl_65cae4dd309e4965aa84";
export const url=new URL("../icons/lucid_2-haze.svg?v=828e0c2ad1397f190ad405249f22c07364855890a6143d52d066e75d32dfae6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
