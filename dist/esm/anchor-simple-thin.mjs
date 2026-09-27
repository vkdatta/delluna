export const name="anchor-simple-thin";
export const id="dl_626dd07ceb9748668493";
export const url=new URL("../icons/anchor-simple-thin.svg?v=92b7d66ee7c54f4aa54e425d803ace1eb8c4f7968c61bc32ad355d3e996b1e5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
