export const name="transition_slide";
export const id="dl_d40bee362886db4be72c";
export const url=new URL("../icons/transition_slide.svg?v=e9fbd1569f5dc3c6c6db7d57448bbe8586145c96244d9c0fdc5841b0cc4bc94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
