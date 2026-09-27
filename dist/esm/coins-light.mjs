export const name="coins-light";
export const id="dl_7f61df66208d45c0b6f6";
export const url=new URL("../icons/coins-light.svg?v=7de6af1a8a5602807ee534c01e792fab38bffa3992bae6b676043ca04e91956c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
