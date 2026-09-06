export const name="browser";
export const id="dl_c49c303f41254c329a9e";
export const url=new URL("../icons/browser.svg?v=470ffe73debda68f4c1c31a38e98853796a581694bdee92a3c1df6e8c6c67fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
