export const name="line_end_arrow";
export const id="dl_2567d55e88ad0c5476b6";
export const url=new URL("../icons/line_end_arrow.svg?v=5ce9d76f0628fc1dc3111b3406a41f26eb3dcb8da325c8bf678ad05f53f33c6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
