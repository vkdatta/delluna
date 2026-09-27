export const name="tool-case";
export const id="dl_2774ea49bb3a4b239fd2";
export const url=new URL("../icons/tool-case.svg?v=c640f6f0e7e9f946cfba0d74cf15adbbe11d3e80ac7e2358d12e384d356fd2ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
