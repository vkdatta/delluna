export const name="file-cpp";
export const id="dl_a195332a4ccb42d9bb3f";
export const url=new URL("../icons/file-cpp.svg?v=210aac308ba3c49ee69e6af621e1dae070ba7d3715be47c8e3c92f2adbaa045d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
