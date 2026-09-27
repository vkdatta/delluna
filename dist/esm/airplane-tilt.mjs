export const name="airplane-tilt";
export const id="dl_a9a1fb06f8604c4b9e6a";
export const url=new URL("../icons/airplane-tilt.svg?v=4728d50864bd1c3e0686ca224c9e802160e2edc150c11efdd01925b4d6c5dc49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
