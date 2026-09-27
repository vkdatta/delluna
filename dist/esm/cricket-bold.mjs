export const name="cricket-bold";
export const id="dl_7aabbf5933f043dcb061";
export const url=new URL("../icons/cricket-bold.svg?v=21a9f07d2164b5754a767eb15e60b5e2212e4f4a8e66962ddeeb421733630af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
