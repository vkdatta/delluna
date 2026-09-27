export const name="sentiment_frustrated";
export const id="dl_d928a5fa619b460bc1ab";
export const url=new URL("../icons/sentiment_frustrated.svg?v=88a34c2cb4a1dcca63a6037161130f5bc347f971f5bfb0512acd1c41edef2d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
