export const name="sentiment_very_satisfied";
export const id="dl_c0e3bffa636dab115844";
export const url=new URL("../icons/sentiment_very_satisfied.svg?v=066b0f71f645e909546a4ba4dac1f665f53ab3f848fa24765adebe41f78f4d77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
