export const name="wrench-light";
export const id="dl_e7342967781dc1edd3a6";
export const url=new URL("../icons/wrench-light.svg?v=bc84c6dd9176b99167b4fab01e68a6a99650e20c3e5867598588dc887cbe3309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
