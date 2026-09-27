export const name="lucid_3-microwave";
export const id="dl_fb9ae321575142fc9066";
export const url=new URL("../icons/lucid_3-microwave.svg?v=23f54aade3cf8113435c5a5307ce4ff0b5df495b615040cefbf4b757deef5513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
