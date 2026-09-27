export const name="funnel-x-bold";
export const id="dl_8ebb77a1f3e94588b1ef";
export const url=new URL("../icons/funnel-x-bold.svg?v=3db4b661b8f9f9bfb9a5c843170c8c3e4fd2808b126023cbd4f69ad27ebd108c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
