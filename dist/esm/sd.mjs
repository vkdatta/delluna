export const name="sd";
export const id="dl_326fa751910ae6feabad";
export const url=new URL("../icons/sd.svg?v=994d9d8f9d13723a8ea6167df9bb190fefde982d4350e253be20a3029892ce8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
