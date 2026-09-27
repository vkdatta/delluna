export const name="lucid_2-drill";
export const id="dl_b8f5d7f60e3e46458c6c";
export const url=new URL("../icons/lucid_2-drill.svg?v=179192c5260cdb648010830e7aaac2d81ebe678e3cde31ea440106add8316b41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
