export const name="slide_library";
export const id="dl_fcb8830ceadffeebf189";
export const url=new URL("../icons/slide_library.svg?v=4dc46706b0b18e04c44fbb220bc565012afd023795e1ccafd5e34fe14662f3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
