export const name="landscape_2-fill";
export const id="dl_09d615a34a004135aed7";
export const url=new URL("../icons/landscape_2-fill.svg?v=345c0e38a87a26246c62e65c88d8729f3412fadf8886bfa4e52d4a92fa7be4a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
