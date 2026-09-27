export const name="pill";
export const id="dl_08eb62b04494427cbf37";
export const url=new URL("../icons/pill.svg?v=a54c50e2bd04de3fee36d2d47ca29ebdbd9aa3cc63219eb2cce80314aad20fb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
