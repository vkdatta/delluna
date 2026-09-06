export const name="greater-than-or-equal-thin";
export const id="dl_2d61a82197ab4bb797c2";
export const url=new URL("../icons/greater-than-or-equal-thin.svg?v=aec7bc5d8816b2643ec8effeb69e39c0db051f44804a8355452e65280d31a39a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
