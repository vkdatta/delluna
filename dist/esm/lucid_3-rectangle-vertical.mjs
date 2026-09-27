export const name="lucid_3-rectangle-vertical";
export const id="dl_b2964954e7b04c09b372";
export const url=new URL("../icons/lucid_3-rectangle-vertical.svg?v=0bc32cbd9e94bfacb1e65511e92202417069450e7f0757a9ad617d470fb334e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
