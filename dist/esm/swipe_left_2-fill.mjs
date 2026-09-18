export const name="swipe_left_2-fill";
export const id="dl_4e81f1b51d544c018194";
export const url=new URL("../icons/swipe_left_2-fill.svg?v=8ead49398dbbf9a9ffe3650b5ed4d9267282087dfd83e565a8b03b1e5703a225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
