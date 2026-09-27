export const name="scales-duotone";
export const id="dl_d060b42a3599ed7889f2";
export const url=new URL("../icons/scales-duotone.svg?v=b551ae4bcce6420eb041f71218610a1fcbbca9b61b803b80bbca834d491408ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
