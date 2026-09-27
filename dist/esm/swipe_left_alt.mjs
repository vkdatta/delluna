export const name="swipe_left_alt";
export const id="dl_5108e31ed4ca03ce4430";
export const url=new URL("../icons/swipe_left_alt.svg?v=6236340c5122ae44890355d5d0a581357aa6e3566e1fc1f914e55322cf22051e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
