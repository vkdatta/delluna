export const name="squares-four-bold";
export const id="dl_8ed616292e93d2510f0a";
export const url=new URL("../icons/squares-four-bold.svg?v=bf071504e38c4ec89abc862651c95dbb751b5086a91b8eb86c00ddb1c6ad2c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
