export const name="brightness_5-fill";
export const id="dl_b334988836d863e02b31";
export const url=new URL("../icons/brightness_5-fill.svg?v=7b63d3c3fc9bfe26597c8c8559736f7777d9ee420fc9da5499e9e3fd1e2d1ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
