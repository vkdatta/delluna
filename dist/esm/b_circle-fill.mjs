export const name="b_circle-fill";
export const id="dl_2e182c927b274a03aba7";
export const url=new URL("../icons/B/b_circle-fill.svg?v=3263e6d171f4a39c8e920bbfe50d84598a3785c331d8cac2d94d90a9cee0f83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
