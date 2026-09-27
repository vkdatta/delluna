export const name="lucid_1-arrow-up-1-0";
export const id="dl_88d16836e2ac41afa3da";
export const url=new URL("../icons/lucid_1-arrow-up-1-0.svg?v=334d9644e93ad6d31c160ab8754140a3948bc8b445c0803a5330f7c11318dbe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
