export const name="square-percent";
export const id="dl_cb070652859643c7b00b";
export const url=new URL("../icons/square-percent.svg?v=6f7472c2aac1612dd25b34505be8f46af2d26cea230cd36b4134a23963246098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
