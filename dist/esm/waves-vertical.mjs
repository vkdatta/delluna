export const name="waves-vertical";
export const id="dl_a38473c39365489e9363";
export const url=new URL("../icons/waves-vertical.svg?v=1098a0a5cb2d1f19bd90a2ae3a52c6f5f7e3853a03153149d155f864b368093a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
