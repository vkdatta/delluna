export const name="icecream";
export const id="dl_b4e0ffdec5afd4abf23f";
export const url=new URL("../icons/icecream.svg?v=691d6ca65f0c26ba05676b72d9a27ff1f1830e23f3302fd8003df3c00fe53108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
