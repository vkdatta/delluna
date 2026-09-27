export const name="swipe_right_alt-fill";
export const id="dl_a4e7b0f9642ba9f45fc3";
export const url=new URL("../icons/swipe_right_alt-fill.svg?v=dc2162f1d00c78c2d8b93fb89d9f51fc4c78e883eb2f01884ef277ab55768ef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
