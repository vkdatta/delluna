export const name="arrow-fat-lines-down-duotone";
export const id="dl_4df2bff269b44387ab6c";
export const url=new URL("../icons/arrow-fat-lines-down-duotone.svg?v=7d1cb3f26506acf49114f38c17ad2bfff86131261be817fcbace265523669b21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
