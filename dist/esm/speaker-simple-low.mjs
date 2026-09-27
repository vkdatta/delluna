export const name="speaker-simple-low";
export const id="dl_b2d8f8d65f997adbacb5";
export const url=new URL("../icons/speaker-simple-low.svg?v=84a5d48045f4432643c57bd9af67b93e44522b10e32db9b8c3a68ce275974f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
