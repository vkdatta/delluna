export const name="lucid_1-cloud-download";
export const id="dl_ed8bf05966d2439d9b54";
export const url=new URL("../icons/lucid_1-cloud-download.svg?v=d34418bec8e4d0d6ab063ebb5713e6f8fc1f52c4d438ef6cc67bf018271c85e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
