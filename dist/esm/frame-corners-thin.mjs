export const name="frame-corners-thin";
export const id="dl_a71c7a33ebcd4976a527";
export const url=new URL("../icons/frame-corners-thin.svg?v=99b6bf4e047f8138ac9482f4c55268ca64c22897de263ce1d6e3068111820e60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
