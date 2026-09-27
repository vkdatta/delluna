export const name="speaker-simple-slash-fill";
export const id="dl_38d6fee0352d8d05d3e6";
export const url=new URL("../icons/speaker-simple-slash-fill.svg?v=b8c64437f476c9e2ccfeaef6ef9e221a9bfb3f78052b68ce85b8568b12ea0ad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
