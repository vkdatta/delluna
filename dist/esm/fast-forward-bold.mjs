export const name="fast-forward-bold";
export const id="dl_15312ea8543e4c819986";
export const url=new URL("../icons/fast-forward-bold.svg?v=a2e9839f079d56ddb404c9b1f266c6e980280c7816be8c261f218a5169ce6c36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
