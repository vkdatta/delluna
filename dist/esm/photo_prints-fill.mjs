export const name="photo_prints-fill";
export const id="dl_c2bffa76c61637f601ba";
export const url=new URL("../icons/photo_prints-fill.svg?v=9d5cec0de941784454cc65c77efc3579e5964250e608c85cb56f053dc6a70189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
