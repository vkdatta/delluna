export const name="turntable";
export const id="dl_b050328c31a241caa0d9";
export const url=new URL("../icons/turntable.svg?v=feeb630ae9961da4b0161cc8ef3c2fb711d4174eef39ad9c117e924c1f8e69da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
