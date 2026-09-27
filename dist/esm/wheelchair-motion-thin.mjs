export const name="wheelchair-motion-thin";
export const id="dl_68aa6fd4ce7ba9438ed9";
export const url=new URL("../icons/wheelchair-motion-thin.svg?v=77c1ced4ec21ef02a8e43925363291b458bb38c27656920cd69f96e7fa46c7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
