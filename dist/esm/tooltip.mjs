export const name="tooltip";
export const id="dl_6f5c6afe98510cc18e50";
export const url=new URL("../icons/tooltip.svg?v=791e924bd0ad1cc4fb57dde3b1eea414727398b99531edc6ea11ea32aa663407",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
