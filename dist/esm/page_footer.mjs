export const name="page_footer";
export const id="dl_1766d3a0af8be69be676";
export const url=new URL("../icons/page_footer.svg?v=51fcb1efa7cb6bd06106c06a205d55063b1b6b25817fe7fa65ab2e32942ab59d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
