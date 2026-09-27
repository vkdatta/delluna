export const name="git-commit-fill";
export const id="dl_2b3af789c1b54430bbd1";
export const url=new URL("../icons/git-commit-fill.svg?v=31fecadd733aaa7181a904bfe7c76710565c14b6e151908634cbdd372d6ffb07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
