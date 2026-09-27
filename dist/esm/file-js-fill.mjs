export const name="file-js-fill";
export const id="dl_869634fadb3948bda1e3";
export const url=new URL("../icons/file-js-fill.svg?v=82c4bcb0c71c8b07a7e6c8da7efe72d58ab2d061c8202d04e5ede75ea7695158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
