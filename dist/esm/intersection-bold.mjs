export const name="intersection-bold";
export const id="dl_d9e1902936534bc28603";
export const url=new URL("../icons/intersection-bold.svg?v=a520eefcb020f044547ce31fe7bc9b250bdf47d58a09fbae53c0f4e2871b3ef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
