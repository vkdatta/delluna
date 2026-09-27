export const name="lucid_2-lamp";
export const id="dl_a680ce91714e4c719be8";
export const url=new URL("../icons/lucid_2-lamp.svg?v=8f7be5d3a8f7843933fb9bbb4e38f8f7c2a0e60732f64531df36d3ac2ac97b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
