export const name="align-top-light";
export const id="dl_2448418899384996a1d8";
export const url=new URL("../icons/align-top-light.svg?v=45aa53b0dd275c6e88581c0ca30bbc70e20e39437d802407ad2488755bbd9842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
