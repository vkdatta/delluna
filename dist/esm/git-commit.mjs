export const name="git-commit";
export const id="dl_17be6ce7e0b146a0ae1c";
export const url=new URL("../icons/git-commit.svg?v=3ee248ba3ed28cbea081a26365c8669e29ef481a72465db568e599e7907b08c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
