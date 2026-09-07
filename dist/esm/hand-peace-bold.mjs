export const name="hand-peace-bold";
export const id="dl_28a7240a84ae4dfca5d7";
export const url=new URL("../icons/hand-peace-bold.svg?v=85f4584e689ed7c23d556fe00242fe180dcfb1a3002958cd51373bfc28fc5cf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
