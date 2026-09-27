export const name="paint-brush-broad-thin";
export const id="dl_d7aade96d3e04675b181";
export const url=new URL("../icons/paint-brush-broad-thin.svg?v=88821710fe968acbe33666c30be0301f501c51957deb96d32b92970a5a812e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
