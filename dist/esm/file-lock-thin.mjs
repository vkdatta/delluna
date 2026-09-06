export const name="file-lock-thin";
export const id="dl_71df01e216434b84917a";
export const url=new URL("../icons/file-lock-thin.svg?v=590fc1c0a8b944bddb775cd47c6d888633e3c583b0ba129b0ae7bd5a50df6a6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
