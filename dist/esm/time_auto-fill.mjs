export const name="time_auto-fill";
export const id="dl_c543ea51b2054b4d6bb2";
export const url=new URL("../icons/time_auto-fill.svg?v=fd1636713d61609ed3340ab0e38b8ed4f394c6ade0e4dae3c685d8570c180fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
