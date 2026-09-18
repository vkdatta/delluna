export const name="swipe_left_2";
export const id="dl_9de96a4a80e44e04a084";
export const url=new URL("../icons/S/swipe_left_2.svg?v=5365fc1535301be2bdb099f13259ff3ef2f9f62cac83a0e7fdf554c57dc41d85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
