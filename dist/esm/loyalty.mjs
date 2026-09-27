export const name="loyalty";
export const id="dl_fad8a5a398b3a1a21afa";
export const url=new URL("../icons/loyalty.svg?v=3052c5147e4f2a8123c60c105c3110bbe61779041816ce01435fc0266c3fa5d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
