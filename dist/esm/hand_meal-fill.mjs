export const name="hand_meal-fill";
export const id="dl_48f69987d83d4d73ab82";
export const url=new URL("../icons/hand_meal-fill.svg?v=a330255a2ae34f032d0b4d9e03310b1108fea7353c35a02d3f972f12bc0e64e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
