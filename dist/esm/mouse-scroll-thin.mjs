export const name="mouse-scroll-thin";
export const id="dl_a20249440bd74a8d9b88";
export const url=new URL("../icons/mouse-scroll-thin.svg?v=81d25a4b183ebd730f45a4ef6dd34fbc6c12b4f7e5189f44e1e9c5c796b40002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
