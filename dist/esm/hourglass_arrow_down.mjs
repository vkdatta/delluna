export const name="hourglass_arrow_down";
export const id="dl_7f387ba020d74c9c9ef2";
export const url=new URL("../icons/H/hourglass_arrow_down.svg?v=440ed4f020f45dc47b826672fe7620e9aaa194191987dcffabc786cf092e5c4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
