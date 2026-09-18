export const name="trail_length_medium";
export const id="dl_6a185dcafa1c44c1a7a8";
export const url=new URL("../icons/trail_length_medium.svg?v=171595504e779a1fe0e8cf54e8768bd553b8567ebbfbe4f0ad947947ebd436d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
