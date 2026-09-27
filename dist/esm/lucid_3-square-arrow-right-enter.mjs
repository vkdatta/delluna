export const name="lucid_3-square-arrow-right-enter";
export const id="dl_6f370a47b2e14feaa84e";
export const url=new URL("../icons/lucid_3-square-arrow-right-enter.svg?v=5f925d72c98e1dc9b6743bb27b44f649c506b0ff7f8e5281b016fa245cde5e33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
