export const name="lucid_2-line-style";
export const id="dl_e736ff4752dc47139cf5";
export const url=new URL("../icons/lucid_2-line-style.svg?v=e94932d6699abfe19eed923c1625099052f353b47de1dd2442725dc81c5c83a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
