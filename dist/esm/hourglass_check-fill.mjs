export const name="hourglass_check-fill";
export const id="dl_6fbcaf04feb04672ab1f";
export const url=new URL("../icons/hourglass_check-fill.svg?v=9c996e2dd360a8bc9db7250a549d66a0dff4f2d9470aaf2fe427da8ff1b8094c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
