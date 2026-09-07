export const name="wave-triangle-fill";
export const id="dl_8770ffd42a8e48759859";
export const url=new URL("../icons/W/wave-triangle-fill.svg?v=2911a14ae1fca491fadeb41ff84cf42508a0532a4edee5cc0d4e9a6a9aca4e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
