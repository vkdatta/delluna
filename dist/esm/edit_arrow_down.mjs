export const name="edit_arrow_down";
export const id="dl_1ce42221e2aa7b75b76e";
export const url=new URL("../icons/edit_arrow_down.svg?v=24213a06d950da3831ddae5654e78ae182a7e0c7aa6074bedffbc0744041149c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
