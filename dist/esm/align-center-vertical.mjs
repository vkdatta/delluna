export const name="align-center-vertical";
export const id="dl_4e49e15b0bf44bd49815";
export const url=new URL("../icons/align-center-vertical.svg?v=b5bc61d1c9b0a98293900e89aef08a73ab85ddae931d5c1f8ef0da2f5e9b789f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
